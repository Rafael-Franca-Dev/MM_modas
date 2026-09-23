import Mascot from './Mascot.jsx'
import './Logo.css'

function Logo({ size = 48, light = false }) {
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`}>
      <span className="logo__badge">
        <Mascot size={size} title="" />
      </span>
      <span className="logo__text">
        <span className="logo__mm">MM</span>
        <span className="logo__modas">MODAS</span>
      </span>
    </span>
  )
}

export default Logo
