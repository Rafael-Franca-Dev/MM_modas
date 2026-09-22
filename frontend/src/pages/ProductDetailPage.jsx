import { Link, useParams } from 'react-router-dom'

function ProductDetailPage({ products, onAddToCart }) {
  // O identificador da URL seleciona o produto que será detalhado na tela.
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    // Evita uma tela quebrada quando o usuário acessa um identificador inexistente.
    return (
      <main className="page-shell container section-block">
        <div className="empty-state">Produto não encontrado.</div>
      </main>
    )
  }

  return (
    <main className="page-shell container section-block">
      <Link className="back-link" to="/produtos">
        ← Voltar
      </Link>

      <article className="detail-layout">
        <div className="detail-image-wrap">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-info">
          <span className="chip">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="detail-rating">★ {product.rating} · 120 avaliações</p>
          <p className="detail-description">{product.description}</p>

          <div className="detail-price-row">
            <strong>R$ {product.price.toFixed(2).replace('.', ',')}</strong>
            <button type="button" onClick={() => onAddToCart(product)}>
              Adicionar ao carrinho
            </button>
          </div>

          <div className="detail-meta">
            <div>
              <span>Cores</span>
              <p>{product.colors.join(', ')}</p>
            </div>
            <div>
              <span>Tamanhos</span>
              <p>{product.sizes.join(', ')}</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

export default ProductDetailPage
