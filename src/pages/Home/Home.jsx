import { useState } from 'react'
import { Link } from 'react-router-dom'
import Mascot from '../../components/Logo/Mascot.jsx'
import ProductArt from '../../components/ProductArt/ProductArt.jsx'
import ProductCard from '../../components/ProductCard/ProductCard.jsx'
import { ArrowIcon, TruckIcon, RefreshIcon, LeafIcon } from '../../components/Icons.jsx'
import { categories, products } from '../../data/products.js'
import '../../components/ProductCard/ProductCard.css'
import './Home.css'

const marqueeWords = ['Autêntico', 'Sem filtro', 'Feito pra você', 'Menino Mau aprova', 'Conforto com atitude']

const pillars = [
  {
    title: 'Autenticidade',
    text: 'Nada de copiar tendência. Cada peça nasce de uma ideia nossa, com a nossa cara — e a sua.',
    color: 'var(--laranja-200)',
  },
  {
    title: 'Conforto',
    text: 'Tecidos macios, modelagens soltas e acabamento caprichado. Estilo que não aperta.',
    color: 'var(--roxo-200)',
  },
  {
    title: 'Atitude',
    text: 'Um sorrisinho de canto, um passo a mais. Roupa pra quem não pede licença pra ser quem é.',
    color: 'var(--laranja-300)',
  },
]

function Home() {
  const featured = products.filter((p) => p.tags.includes('drop')).slice(0, 4)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.includes('@')) setSubscribed(true)
  }

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <span className="eyebrow">Coleção Primavera · 2026</span>
            <h1 className="hero__title">
              Bonzinho demais? <span className="hero__highlight">Aqui não.</span>
            </h1>
            <p className="hero__lead">
              A MM MODAS é pra quem tem personalidade de sobra. Roupas confortáveis, cheias de detalhe e com
              aquele sorriso maroto de quem sabe exatamente quem é.
            </p>
            <div className="hero__cta">
              <Link to="/loja" className="btn btn--primary">
                Ver a coleção <ArrowIcon size={18} />
              </Link>
              <Link to="/sobre" className="btn btn--ghost">
                Quem é o Menino Mau?
              </Link>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__blob" />
            <div className="hero__mascot">
              <Mascot size={300} title="" />
            </div>
            <span className="sticker sticker--one">100% autêntico</span>
            <span className="sticker sticker--two">sem filtro ✦</span>
            <div className="hero__float hero__float--tee">
              <ProductArt type="tee" color="#ffc596" bg="var(--surface)" />
            </div>
            <div className="hero__float hero__float--cap">
              <ProductArt type="cap" color="#c8b3f0" bg="var(--surface)" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAIXA ---------- */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i}>
              {w} <em>✦</em>
            </span>
          ))}
        </div>
      </div>

      {/* ---------- CATEGORIAS ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Escolha sua vibe</span>
              <h2 className="section-title">Categorias</h2>
            </div>
            <Link to="/loja" className="link-arrow">
              Ver tudo <ArrowIcon size={18} />
            </Link>
          </div>

          <div className="categories">
            {categories.map((c) => (
              <Link key={c.id} to={`/loja?categoria=${c.id}`} className="category" style={{ background: c.bg }}>
                <ProductArt type={c.art} color="#fff" bg="transparent" className="category__art" />
                <span className="category__name">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- DESTAQUES ---------- */}
      <section className="section section--tinted">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Acabou de chegar</span>
              <h2 className="section-title">Drop da semana</h2>
            </div>
            <Link to="/loja" className="link-arrow">
              Ir pra loja <ArrowIcon size={18} />
            </Link>
          </div>
          <div className="product-grid">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MANIFESTO ---------- */}
      <section className="section">
        <div className="container manifesto">
          <div className="manifesto__intro">
            <span className="eyebrow">Manifesto</span>
            <h2 className="section-title">Ser Menino Mau é ser de verdade.</h2>
            <p className="muted">
              O nome veio do apelido de um amigo — aquele que sempre tinha uma ideia meio fora da caixa e um
              sorriso que entregava tudo. Virou marca, virou jeito de vestir.
            </p>
            <Link to="/sobre" className="btn btn--accent">
              Conheça a história
            </Link>
          </div>
          <div className="pillars">
            {pillars.map((p, i) => (
              <div key={p.title} className="pillar" style={{ background: p.color }}>
                <span className="pillar__num">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- BENEFÍCIOS ---------- */}
      <section className="container benefits">
        <div className="benefit">
          <TruckIcon />
          <div>
            <strong>Frete grátis</strong>
            <span>em compras acima de R$ 299</span>
          </div>
        </div>
        <div className="benefit">
          <RefreshIcon />
          <div>
            <strong>Troca fácil</strong>
            <span>até 30 dias depois de receber</span>
          </div>
        </div>
        <div className="benefit">
          <LeafIcon />
          <div>
            <strong>Produção local</strong>
            <span>tiragens pequenas, sem desperdício</span>
          </div>
        </div>
      </section>

      {/* ---------- NEWSLETTER ---------- */}
      <section className="section">
        <div className="container">
          <div className="newsletter">
            <div className="newsletter__mascot" aria-hidden="true">
              <Mascot size={120} title="" />
            </div>
            <div className="newsletter__content">
              <h2>Entra pra turma do Menino Mau</h2>
              <p>Receba os drops antes de todo mundo e ganhe 10% na primeira compra.</p>
              {subscribed ? (
                <p className="newsletter__ok">Prontinho! Seu cupom é <strong>MENINOMAU10</strong></p>
              ) : (
                <form className="newsletter__form" onSubmit={handleSubscribe}>
                  <label htmlFor="newsletter-email" className="sr-only">
                    Seu e-mail
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    className="input"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn btn--primary">
                    Quero entrar
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
