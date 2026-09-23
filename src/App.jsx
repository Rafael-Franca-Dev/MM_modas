import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Toast from './components/Toast/Toast.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home/Home.jsx'
import Shop from './pages/Shop/Shop.jsx'
import ProductDetail from './pages/ProductDetail/ProductDetail.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Checkout from './pages/Checkout/Checkout.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loja" element={<Shop />} />
          <Route path="/produto/:slug" element={<ProductDetail />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Toast />
    </>
  )
}

export default App
