import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Mascot from '../Logo/Mascot.jsx'
import { useCart } from '../../context/CartContext.jsx'
import './Toast.css'

function Toast() {
  const { toast, dismissToast } = useCart()

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(dismissToast, 3200)
    return () => clearTimeout(timer)
  }, [toast, dismissToast])

  if (!toast) return null

  return (
    <div className="toast" role="status" key={toast.id}>
      <Mascot size={40} title="" />
      <div>
        <p className="toast__msg">{toast.message}</p>
        <Link to="/carrinho" className="toast__link" onClick={dismissToast}>
          Ver carrinho →
        </Link>
      </div>
    </div>
  )
}

export default Toast
