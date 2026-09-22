import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

function HomePage({ products, onAddToCart }) {
  // A home destaca os produtos marcados como recomendados no arquivo local de dados.
  const highlighted = products.filter((product) => product.featured).slice(0, 4)
  const categories = ['CAMISAS', 'CALÇAS', 'JAQUETAS']

  return (
    <main className="page-shell">
      <section className="hero-section">
        {/* O hero segue a composição visual principal da primeira tela do mockup. */}
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">MM MODAS</span>
            <h1>Estilo que conquista</h1>
            <p>Descubra a nova coleção de outono/inverno com peças exclusivas e sofisticadas para o homem moderno.</p>
            <div className="cta-row">
              <Link className="primary-button" to="/produtos">COMPRAR AGORA</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <div className="section-heading"><h2>Explore Categorias</h2></div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link key={category} className={`category-tile category-${index + 1}`} to={`/produtos?categoria=${category}`}>
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="container section-block">
        <div className="section-heading">
          <h2>Produtos em destaque</h2>
          <Link to="/produtos">Ver tudo</Link>
        </div>

        <div className="product-grid">
          {highlighted.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div><h3>Newsletter MM Modas</h3><p>Receba novidades e ofertas exclusivas.</p></div>
          <div><h3>Sobre</h3><p>Entregas · Trocas · Política de Privacidade</p></div>
          <div><h3>Contato</h3><p>FAQ · Fale conosco</p></div>
        </div>
      </footer>
    </main>
  )
}

export default HomePage
