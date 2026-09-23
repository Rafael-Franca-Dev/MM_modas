import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Volta para o topo da página sempre que a rota muda
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
