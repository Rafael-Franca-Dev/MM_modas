import { Link, NavLink } from 'react-router-dom'

const menuItems = [
  // O menu reproduz as categorias apresentadas no cabeçalho do mockup enviado.
  { label: 'CAMISAS', to: '/produtos?categoria=Camisas' },
  { label: 'CALÇAS', to: '/produtos?categoria=Calças' },
  { label: 'JAQUETAS', to: '/produtos?categoria=Jaquetas' },
  { label: 'ACESSÓRIOS', to: '/produtos?categoria=Acessórios' },
  { label: 'OFERTAS', to: '/produtos?ofertas=true' },
]

function Header({ cartCount }) {
  // O contador é exibido somente quando existe pelo menos um item salvo no carrinho.
  return (
    <header className="topbar">
      <div className="container nav-shell">
        <Link className="brand" to="/">
          MM Modas
        </Link>

        <nav className="nav" aria-label="Menu principal">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
              {item.label === 'Carrinho' && cartCount > 0 ? (
                <span className="cart-badge">{cartCount}</span>
              ) : null}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <Link className="nav-icon" to="/produtos" aria-label="Buscar produtos">
            ⌕
          </Link>
          <Link className="nav-icon" to="/novo-produto" aria-label="Área do usuário">
            ♙
          </Link>
          <Link className="cart-link" to="/carrinho" aria-label="Abrir carrinho">
            🛒 <span>R$ {cartCount > 0 ? '128,90' : '0,00'}</span>
            {cartCount > 0 ? <span className="cart-badge">{cartCount}</span> : null}
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
