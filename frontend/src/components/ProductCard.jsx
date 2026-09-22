import { Link } from 'react-router-dom'

function ProductCard({ product, onAddToCart }) {
  // O card concentra a apresentação do produto e a ação de compra rápida.
  return (
    <article className="product-card">
      <Link to={`/produto/${product.id}`} className="product-media">
        <img src={product.image} alt={product.name} />
      </Link>

      <div className="product-body">
        {/* Categoria e avaliação facilitam a leitura rápida do catálogo. */}
        <div className="tag-row">
          <span className="chip">{product.category}</span>
          <span className="rating">★ {product.rating}</span>
        </div>

        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="price-row">
          <strong>R$ {product.price.toFixed(2).replace('.', ',')}</strong>
          <button type="button" onClick={() => onAddToCart(product)}>
            Adicionar
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
