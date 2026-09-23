import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo.jsx'
import { InstagramIcon, TiktokIcon, WhatsIcon } from '../Icons.jsx'
import { categories } from '../../data/products.js'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo size={52} light />
          <p>
            Roupa com personalidade pra quem não cabe em rótulo. Feito com carinho (e um pouquinho de
            malícia).
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="TikTok"><TiktokIcon /></a>
            <a href="#" aria-label="WhatsApp"><WhatsIcon /></a>
          </div>
        </div>

        <div>
          <h4>Loja</h4>
          <ul>
            {categories.map((c) => (
              <li key={c.id}>
                <Link to={`/loja?categoria=${c.id}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>MM</h4>
          <ul>
            <li><Link to="/sobre">Nossa história</Link></li>
            <li><Link to="/contato">Fale com a gente</Link></li>
            <li><Link to="/carrinho">Meu carrinho</Link></li>
          </ul>
        </div>

        <div>
          <h4>Ajuda</h4>
          <ul>
            <li>Trocas em até 30 dias</li>
            <li>Frete grátis acima de R$ 299</li>
            <li>Pix, cartão e boleto</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {year} MM MODAS · Projeto acadêmico · Menino Mau aprova.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
