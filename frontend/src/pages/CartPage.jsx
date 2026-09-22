import { Link } from 'react-router-dom'

function CartPage({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  // O total é calculado com base no preço e na quantidade atual de cada item.
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <main className="page-shell container section-block">
      <div className="section-heading">
        <h2>Carrinho</h2>
      </div>

      {cartItems.length === 0 ? (
        // O estado vazio oferece uma rota direta para voltar ao catálogo.
        <div className="empty-state">
          Seu carrinho está vazio. <Link to="/produtos">Escolha um produto</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>R$ {item.price.toFixed(2).replace('.', ',')}</p>
                </div>
                <div className="quantity-box">
                  <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <button type="button" className="remove-button" onClick={() => onRemoveItem(item.id)}>
                  Remover
                </button>
              </div>
            ))}
          </div>

          <aside className="summary-card">
            <h3>Resumo do pedido</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>R$ {total.toFixed(2).replace('.', ',')}</strong>
            </div>
            <div className="summary-row">
              <span>Frete</span>
              <strong>Grátis</strong>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <strong>R$ {total.toFixed(2).replace('.', ',')}</strong>
            </div>
            <Link className="primary-button block" to="/checkout">
              Ir para checkout
            </Link>
            <button type="button" className="secondary-button block" onClick={onClearCart}>
              Limpar carrinho
            </button>
          </aside>
        </div>
      )}
    </main>
  )
}

export default CartPage
