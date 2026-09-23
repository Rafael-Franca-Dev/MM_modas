import { createContext, useContext, useEffect, useReducer, useState, useCallback } from 'react'
import { FRETE_GRATIS_A_PARTIR, VALOR_FRETE, CUPONS } from './cartConfig.js'

const CartContext = createContext(null)

const STORAGE_KEY = 'mm-modas:carrinho'

// Cada item do carrinho é identificado por produto + cor + tamanho
function itemKey({ id, color, size }) {
  return `${id}-${color}-${size}`
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const key = itemKey(action.item)
      const existing = state.find((i) => i.key === key)
      if (existing) {
        return state.map((i) => (i.key === key ? { ...i, qty: i.qty + action.item.qty } : i))
      }
      return [...state, { ...action.item, key }]
    }
    case 'UPDATE_QTY':
      return state
        .map((i) => (i.key === action.key ? { ...i, qty: action.qty } : i))
        .filter((i) => i.qty > 0)
    case 'REMOVE':
      return state.filter((i) => i.key !== action.key)
    case 'CLEAR':
      return []
    default:
      return state
  }
}

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart)
  const [toast, setToast] = useState(null)
  const [coupon, setCoupon] = useState(null)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* armazenamento indisponível: segue só em memória */
    }
  }, [items])

  const showToast = useCallback((message) => {
    setToast({ message, id: Date.now() })
  }, [])

  const addItem = (item) => {
    dispatch({ type: 'ADD', item })
    showToast(`${item.name} foi pro carrinho!`)
  }
  const updateQty = (key, qty) => dispatch({ type: 'UPDATE_QTY', key, qty })
  const removeItem = (key) => dispatch({ type: 'REMOVE', key })
  const clearCart = () => {
    dispatch({ type: 'CLEAR' })
    setCoupon(null)
  }

  const applyCoupon = (code) => {
    const normalized = code.trim().toUpperCase()
    if (CUPONS[normalized]) {
      setCoupon({ code: normalized, rate: CUPONS[normalized] })
      return true
    }
    return false
  }

  const count = items.reduce((sum, i) => sum + i.qty, 0)
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const discount = coupon ? subtotal * coupon.rate : 0
  const shipping = subtotal === 0 || subtotal >= FRETE_GRATIS_A_PARTIR ? 0 : VALOR_FRETE
  const total = subtotal - discount + shipping

  const value = {
    items,
    count,
    subtotal,
    discount,
    shipping,
    total,
    coupon,
    addItem,
    updateQty,
    removeItem,
    clearCart,
    applyCoupon,
    removeCoupon: () => setCoupon(null),
    toast,
    showToast,
    dismissToast: () => setToast(null),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart precisa estar dentro de <CartProvider>')
  return ctx
}
