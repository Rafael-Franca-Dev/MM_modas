import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProductArt from '../../components/ProductArt/ProductArt.jsx'
import Mascot from '../../components/Logo/Mascot.jsx'
import { TrashIcon } from '../../components/Icons.jsx'
import { useCart } from '../../context/CartContext.jsx'
import { FRETE_GRATIS_A_PARTIR } from '../../context/cartConfig.js'
import { formatPrice } from '../../utils/format.js'
import './Cart.css'

function Cart() {
  const { items, subtotal, discount, shipping, total, coupon, updateQty, removeItem, applyCoupon, removeCoupon } =
    useCart()
  const [code, setCode] = useState('')
  const [couponMsg, setCouponMsg] = useState(null)
  const navigate = useNavigate()

  const handleCoupon = (e) => {
    e.preventDefault()
    const ok = applyCoupon(code)
    setCouponMsg(ok ? { type: 'ok', text: 'Cupom aplicado!' } : { type: 'error', text: 'Esse cupom não existe.' })
    if (ok) setCode('')
  }

  if (items.length === 0) {
    return (
      <div className="container">
        <div className="cart-empty">
          <Mascot size={140} title="" />
          <h1>Seu carrinho tá vazio</h1>
          <p className="muted">Nem o Menino Mau aguenta ver um carrinho assim. Bora escolher umas peças?</p>
          <Link to="/loja" className="btn btn--primary">
            Ir pra loja
          </Link>
        </div>
      </div>
    )
  }

  const missing = FRETE_GRATIS_A_PARTIR - subtotal
  const progress = Math.min(100, (subtotal / FRETE_GRATIS_A_PARTIR) * 100)

  return (
    <div className="container">
      <header className="page-head">
        <span className="eyebrow">Quase seu</span>
        <h1>Carrinho</h1>
      </header>

      <div className="cart">
        <section className="cart__items" aria-label="Itens do carrinho">
          <div className="shipping-bar">
            <p>
              {missing > 0 ? (
                <>
                  Faltam <strong>{formatPrice(missing)}</strong> pro frete grátis
                </>
              ) : (
                <strong>Oba! Você ganhou frete grátis.</strong>
              )}
            </p>
            <div className="shipping-bar__track">
              <div className="shipping-bar__fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {items.map((item) => (
            <article key={item.key} className="cart-item">
              <Link to={`/produto/${item.slug}`} className="cart-item__art">
                <ProductArt type={item.type} color={item.colorHex} bg="var(--roxo-100)" />
              </Link>
              <div className="cart-item__info">
                <Link to={`/produto/${item.slug}`} className="cart-item__name">
                  {item.name}
                </Link>
                <p className="muted">
                  {item.color} · Tam. {item.size}
                </p>
                <div className="cart-item__controls">
                  <div className="qty qty--sm">
                    <button type="button" onClick={() => updateQty(item.key, item.qty - 1)} aria-label="Diminuir">
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button type="button" onClick={() => updateQty(item.key, item.qty + 1)} aria-label="Aumentar">
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="cart-item__remove"
                    onClick={() => removeItem(item.key)}
                    aria-label={`Remover ${item.name}`}
                  >
                    <TrashIcon size={18} /> Remover
                  </button>
                </div>
              </div>
              <strong className="cart-item__price">{formatPrice(item.price * item.qty)}</strong>
            </article>
          ))}
        </section>

        <aside className="summary">
          <h2>Resumo</h2>
          <dl>
            <div>
              <dt>Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            {coupon && (
              <div className="summary__discount">
                <dt>
                  Cupom {coupon.code}{' '}
                  <button type="button" onClick={removeCoupon} className="summary__remove-coupon">
                    remover
                  </button>
                </dt>
                <dd>− {formatPrice(discount)}</dd>
              </div>
            )}
            <div>
              <dt>Frete</dt>
              <dd>{shipping === 0 ? 'Grátis' : formatPrice(shipping)}</dd>
            </div>
            <div className="summary__total">
              <dt>Total</dt>
              <dd>{formatPrice(total)}</dd>
            </div>
          </dl>

          {!coupon && (
            <form className="summary__coupon" onSubmit={handleCoupon}>
              <label htmlFor="cupom" className="sr-only">
                Cupom de desconto
              </label>
              <input
                id="cupom"
                className="input"
                placeholder="Cupom (tenta MENINOMAU10)"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <button type="submit" className="btn btn--ghost">
                Aplicar
              </button>
            </form>
          )}
          {couponMsg && <p className={`summary__msg summary__msg--${couponMsg.type}`}>{couponMsg.text}</p>}

          <button type="button" className="btn btn--primary btn--block" onClick={() => navigate('/checkout')}>
            Finalizar compra
          </button>
          <Link to="/loja" className="summary__continue">
            Continuar comprando
          </Link>
        </aside>
      </div>
    </div>
  )
}

export default Cart
