import { useState } from 'react'

function CheckoutPage({ cartItems, onCompleteOrder }) {
  // Os campos controlados permitem validar e limpar o formulário sem recarregar a página.
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    card: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // A compra só avança quando todos os campos obrigatórios possuem conteúdo.
    const requiredFields = Object.values(form).some((value) => value.trim() === '')
    if (requiredFields) {
      setError('Preencha todos os campos para finalizar a compra.')
      setSuccess('')
      return
    }

    setError('')
    setSuccess('Pedido realizado com sucesso! Em breve você receberá a confirmação por e-mail.')
    onCompleteOrder()
  }

  if (cartItems.length === 0) {
    // Checkout sem itens é bloqueado para preservar a consistência do fluxo de compra.
    return (
      <main className="page-shell container section-block">
        <div className="empty-state">Adicione produtos antes de concluir o checkout.</div>
      </main>
    )
  }

  return (
    <main className="page-shell container section-block">
      <div className="section-heading">
        <h2>Checkout</h2>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="name">Nome completo</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} />
          </div>
          <div className="input-block">
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
          </div>
          <div className="input-block">
            <label htmlFor="address">Endereço</label>
            <input id="address" name="address" value={form.address} onChange={handleChange} />
          </div>
          <div className="input-block">
            <label htmlFor="card">Cartão</label>
            <input id="card" name="card" value={form.card} onChange={handleChange} />
          </div>

          {error && <p className="feedback error">{error}</p>}
          {success && <p className="feedback success">{success}</p>}

          <button className="primary-button" type="submit">
            Finalizar compra
          </button>
        </form>

        <aside className="summary-card">
          <h3>Resumo</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="summary-item">
              <span>
                {item.name} × {item.quantity}
              </span>
              <strong>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</strong>
            </div>
          ))}
          <div className="summary-row total">
            <span>Total</span>
            <strong>R$ {total.toFixed(2).replace('.', ',')}</strong>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default CheckoutPage
