import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductArt from '../../components/ProductArt/ProductArt.jsx'
import ProductCard from '../../components/ProductCard/ProductCard.jsx'
import { TruckIcon, RefreshIcon } from '../../components/Icons.jsx'
import { getProductBySlug, getCategoryName, products } from '../../data/products.js'
import { useCart } from '../../context/CartContext.jsx'
import { formatPrice, installments } from '../../utils/format.js'
import NotFound from '../NotFound/NotFound.jsx'
import '../../components/ProductCard/ProductCard.css'
import './ProductDetail.css'

function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) return <NotFound />

  // A "key" reinicia os estados (cor, tamanho...) ao navegar entre produtos
  return <ProductView key={slug} product={product} />
}

function ProductView({ product }) {
  const { addItem } = useCart()
  const [color, setColor] = useState(product.colors[0])
  const [size, setSize] = useState(product.sizes.length === 1 ? product.sizes[0] : null)
  const [qty, setQty] = useState(1)
  const [sizeError, setSizeError] = useState(false)

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
  const fallback = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAdd = () => {
    if (!size) {
      setSizeError(true)
      return
    }
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      type: product.type,
      price: product.price,
      color: color.name,
      colorHex: color.hex,
      size,
      qty,
    })
  }

  return (
    <div className="container">
      <nav className="breadcrumb" aria-label="Você está em">
        <Link to="/">Início</Link> / <Link to="/loja">Loja</Link> /{' '}
        <Link to={`/loja?categoria=${product.category}`}>{getCategoryName(product.category)}</Link> /{' '}
        <span aria-current="page">{product.name}</span>
      </nav>

      <section className="pdp">
        <div className="pdp__gallery">
          <ProductArt
            type={product.type}
            color={color.hex}
            bg="var(--roxo-100)"
            className="pdp__art"
            label={`${product.name} na cor ${color.name}`}
          />
          <div className="pdp__thumbs">
            {product.colors.map((c) => (
              <button
                key={c.name}
                type="button"
                className={`pdp__thumb ${c.name === color.name ? 'pdp__thumb--active' : ''}`}
                onClick={() => setColor(c)}
                aria-label={`Ver na cor ${c.name}`}
              >
                <ProductArt type={product.type} color={c.hex} bg="var(--laranja-100)" />
              </button>
            ))}
          </div>
        </div>

        <div className="pdp__info">
          <div className="pdp__tags">
            {product.tags.includes('novo') && <span className="tag">Novo</span>}
            {product.tags.includes('drop') && <span className="tag tag--roxo">Drop da semana</span>}
          </div>
          <h1 className="pdp__name">{product.name}</h1>

          <div className="pdp__price">
            <strong>{formatPrice(product.price)}</strong>
            {product.oldPrice && <s>{formatPrice(product.oldPrice)}</s>}
          </div>
          <p className="muted pdp__installments">{installments(product.price)}</p>

          <p className="pdp__desc">{product.description}</p>

          {/* Cor */}
          <fieldset className="pdp__group">
            <legend>
              Cor: <strong>{color.name}</strong>
            </legend>
            <div className="pdp__swatches">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  className={`swatch ${c.name === color.name ? 'swatch--active' : ''}`}
                  style={{ background: c.hex }}
                  onClick={() => setColor(c)}
                  aria-label={c.name}
                  aria-pressed={c.name === color.name}
                />
              ))}
            </div>
          </fieldset>

          {/* Tamanho */}
          <fieldset className="pdp__group">
            <legend>
              Tamanho{size && <>: <strong>{size}</strong></>}
            </legend>
            <div className="pdp__sizes">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`size ${s === size ? 'size--active' : ''}`}
                  onClick={() => {
                    setSize(s)
                    setSizeError(false)
                  }}
                  aria-pressed={s === size}
                >
                  {s}
                </button>
              ))}
            </div>
            {sizeError && <p className="field-error">Escolhe um tamanho primeiro, vai!</p>}
          </fieldset>

          {/* Quantidade + comprar */}
          <div className="pdp__buy">
            <div className="qty" aria-label="Quantidade">
              <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Diminuir">
                −
              </button>
              <span>{qty}</span>
              <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Aumentar">
                +
              </button>
            </div>
            <button type="button" className="btn btn--primary pdp__add" onClick={handleAdd}>
              Adicionar ao carrinho
            </button>
          </div>

          <ul className="pdp__perks">
            <li>
              <TruckIcon size={20} /> Frete grátis acima de R$ 299
            </li>
            <li>
              <RefreshIcon size={20} /> Primeira troca por nossa conta
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Combina com</h2>
        <div className="product-grid">
          {(related.length ? related : fallback).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
