import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { defaultProducts } from './data/dados'
import { useLocalStorage } from './hooks/useLocalStorage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProductFormPage from './pages/ProductFormPage'
import ProductsPage from './pages/ProductsPage'
import './App.css'

function App() {
  // Produtos e carrinho permanecem disponíveis entre recarregamentos da aplicação.
  const [products, setProducts] = useLocalStorage('mmmodas-products', defaultProducts)
  const [cartItems, setCartItems] = useLocalStorage('mmmodas-cart', [])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')
  const [sort, setSort] = useState('relevancia')

  // Define o título da aba quando o componente principal é montado.
  useEffect(() => {
    document.title = 'MM Modas'
  }, [])

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const filteredProducts = useMemo(() => {
    // Aplica busca, categoria e ordenação antes de enviar os dados para a página.
    const normalizedSearch = search.trim().toLowerCase()

    return products
      .filter((product) => {
        const matchesSearch =
          normalizedSearch === '' || product.name.toLowerCase().includes(normalizedSearch)
        const matchesCategory = category === 'Todos' || product.category === category
        return matchesSearch && matchesCategory
      })
      .sort((first, second) => {
        switch (sort) {
          case 'menor-preco':
            return first.price - second.price
          case 'maior-preco':
            return second.price - first.price
          case 'nome':
            return first.name.localeCompare(second.name)
          default:
            return second.rating - first.rating
        }
      })
  }, [category, products, search, sort])

  const addToCart = (product) => {
    // Incrementa a quantidade de um item existente ou cria uma nova linha no carrinho.
    setCartItems((current) => {
      const existingItem = current.find((item) => item.id === product.id)

      if (existingItem) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [...current, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (productId, nextQuantity) => {
    // Quantidade zero remove o produto; valores positivos atualizam a linha selecionada.
    if (nextQuantity <= 0) {
      setCartItems((current) => current.filter((item) => item.id !== productId))
      return
    }

    setCartItems((current) =>
      current.map((item) =>
        item.id === productId ? { ...item, quantity: nextQuantity } : item,
      ),
    )
  }

  const removeItem = (productId) => {
    setCartItems((current) => current.filter((item) => item.id !== productId))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const createProduct = (newProduct) => {
    // Novos produtos entram no início da lista e são persistidos automaticamente.
    setProducts((current) => [newProduct, ...current])
  }

  const completeOrder = () => {
    setCartItems([])
  }

  return (
    <BrowserRouter>
      <Header cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<HomePage products={products} onAddToCart={addToCart} />} />
        <Route
          path="/produtos"
          element={
            <ProductsPage
              products={filteredProducts}
              search={search}
              category={category}
              sort={sort}
              onSearch={setSearch}
              onCategoryChange={setCategory}
              onSortChange={setSort}
              onAddToCart={addToCart}
            />
          }
        />
        <Route
          path="/produto/:id"
          element={<ProductDetailPage products={products} onAddToCart={addToCart} />}
        />
        <Route path="/novo-produto" element={<ProductFormPage onCreateProduct={createProduct} />} />
        <Route
          path="/carrinho"
          element={
            <CartPage
              cartItems={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeItem}
              onClearCart={clearCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={<CheckoutPage cartItems={cartItems} onCompleteOrder={completeOrder} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
