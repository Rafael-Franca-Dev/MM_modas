import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Mascot from '../../components/Logo/Mascot.jsx'
import { useCart } from '../../context/CartContext.jsx'
import { formatPrice } from '../../utils/format.js'
import '../Cart/Cart.css'
import './Checkout.css'

const initialForm = { nome: '', email: '', cep: '', endereco: '', numero: '', pagamento: 'pix' }

function Checkout() {
  const { items, total, count, clearCart } = useCart()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [orderNumber, setOrderNumber] = useState(null)

  // Pedido concluído
  if (orderNumber) {
    return (
      <div className="container">
        <div className="order-ok">
          <Mascot size={150} title="" />
          <span className="eyebrow">Pedido #{orderNumber}</span>
          <h1>Arrasou, {form.nome.split(' ')[0]}!</h1>
          <p className="muted">
            Seu pedido foi recebido. Mandamos os detalhes para <strong>{form.email}</strong>.
          </p>
          <Link to="/loja" className="btn btn--primary">
            Continuar comprando
          </Link>
        </div>
      </div>
    )
  }

  if (items.length === 0) return <Navigate to="/carrinho" replace />

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const validate = () => {
    const err = {}
    if (form.nome.trim().length < 3) err.nome = 'Conta pra gente seu nome completo.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'E-mail inválido.'
    if (!/^\d{5}-?\d{3}$/.test(form.cep)) err.cep = 'CEP no formato 00000-000.'
    if (!form.endereco.trim()) err.endereco = 'Informe o endereço.'
    if (!form.numero.trim()) err.numero = 'Informe o número.'
    return err
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const err = validate()
    setErrors(err)
    if (Object.keys(err).length === 0) {
      setOrderNumber(Math.floor(100000 + Math.random() * 900000))
      clearCart()
    }
  }

  const field = (name, label, props = {}) => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        className={`input ${errors[name] ? 'input--error' : ''}`}
        value={form[name]}
        onChange={handleChange}
        {...props}
      />
      {errors[name] && <span className="field-error">{errors[name]}</span>}
    </div>
  )

  return (
    <div className="container">
      <header className="page-head">
        <span className="eyebrow">Último passo</span>
        <h1>Finalizar compra</h1>
      </header>

      <form className="checkout" onSubmit={handleSubmit} noValidate>
        <div className="checkout__form">
          <h2>Seus dados</h2>
          {field('nome', 'Nome completo', { autoComplete: 'name' })}
          {field('email', 'E-mail', { type: 'email', autoComplete: 'email' })}

          <h2>Entrega</h2>
          <div className="checkout__row">
            {field('cep', 'CEP', { inputMode: 'numeric', placeholder: '00000-000' })}
            {field('numero', 'Número')}
          </div>
          {field('endereco', 'Endereço', { autoComplete: 'street-address' })}

          <h2>Pagamento</h2>
          <div className="pay-options">
            {[
              { id: 'pix', label: 'Pix', hint: 'aprovação na hora' },
              { id: 'cartao', label: 'Cartão', hint: 'até 3x sem juros' },
              { id: 'boleto', label: 'Boleto', hint: 'vence em 2 dias' },
            ].map((opt) => (
              <label key={opt.id} className={`pay-option ${form.pagamento === opt.id ? 'pay-option--active' : ''}`}>
                <input
                  type="radio"
                  name="pagamento"
                  value={opt.id}
                  checked={form.pagamento === opt.id}
                  onChange={handleChange}
                />
                <strong>{opt.label}</strong>
                <span>{opt.hint}</span>
              </label>
            ))}
          </div>
        </div>

        <aside className="summary">
          <h2>Seu pedido</h2>
          <p className="muted">
            {count} {count === 1 ? 'item' : 'itens'} no carrinho
          </p>
          <ul className="checkout__list">
            {items.map((i) => (
              <li key={i.key}>
                <span>
                  {i.qty}× {i.name} <small className="muted">({i.size})</small>
                </span>
                <span>{formatPrice(i.price * i.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="checkout__total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>
          <button type="submit" className="btn btn--primary btn--block">
            Confirmar pedido
          </button>
          <Link to="/carrinho" className="summary__continue">
            Voltar ao carrinho
          </Link>
        </aside>
      </form>
    </div>
  )
}

export default Checkout
