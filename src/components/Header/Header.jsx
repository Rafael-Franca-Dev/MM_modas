import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo.jsx'
import { BagIcon, MenuIcon, CloseIcon } from '../Icons.jsx'
import { useCart } from '../../context/CartContext.jsx'
import './Header.css'

const links = [
  { to: '/', label: 'Início', end: true },
  { to: '/loja', label: 'Loja' },
  { to: '/sobre', label: 'Nossa história' },
  { to: '/contato', label: 'Contato' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { count } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="announcement">
        <p>
          Frete grátis acima de R$ 299 · Primeira compra? Use <strong>MENINOMAU10</strong>
        </p>
      </div>

      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          <Link to="/" className="header__logo" onClick={() => setOpen(false)} aria-label="MM MODAS — página inicial">
            <Logo size={44} />
          </Link>

          <nav className={`header__nav ${open ? 'header__nav--open' : ''}`} aria-label="Principal">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header__actions">
            <Link to="/carrinho" className="header__cart" aria-label={`Carrinho com ${count} itens`}>
              <BagIcon />
              {count > 0 && <span className="header__badge">{count}</span>}
            </Link>
            <button
              type="button"
              className="header__toggle"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
