import { Link } from 'react-router-dom'
import ProductArt from '../ProductArt/ProductArt.jsx'
import { formatPrice } from '../../utils/format.js'
import './ProductCard.css'

// Alterna o fundo dos cards entre laranja e roxo claros
const backgrounds = ['var(--roxo-100)', 'var(--laranja-100)', 'var(--roxo-200)', 'var(--laranja-200)']

function ProductCard({ product }) {
  const bg = backgrounds[product.id % backgrounds.length]
  const isNew = product.tags.includes('novo')
  const isDrop = product.tags.includes('drop')

  return (
    <article className="product-card">
      <Link to={`/produto/${product.slug}`} className="product-card__link">
        <div className="product-card__media">
          <ProductArt type={product.type} color={product.colors[0].hex} bg={bg} />
          <div className="product-card__tags">
            {isNew && <span className="tag">Novo</span>}
            {isDrop && <span className="tag tag--roxo">Drop</span>}
            {product.oldPrice && <span className="tag">-{Math.round((1 - product.price / product.oldPrice) * 100)}%</span>}
          </div>
        </div>

        <div className="product-card__body">
          <h3 className="product-card__name">{product.name}</h3>
          <div className="product-card__prices">
            <span className="product-card__price">{formatPrice(product.price)}</span>
            {product.oldPrice && <s className="product-card__old">{formatPrice(product.oldPrice)}</s>}
          </div>
          <div className="product-card__colors" aria-label={`${product.colors.length} cores disponíveis`}>
            {product.colors.map((c) => (
              <span key={c.name} className="swatch-dot" style={{ background: c.hex }} title={c.name} />
            ))}
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard
