import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductProvider from './context/InfoProvider'
import  {CartProvider}  from './context/CartContext'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Pizza from "./views/Pizza";
import Cart from "./views/Cart";
import NotFound from './views/NotFound'


function App() {
  return (
    <div className="App">
      <ProductProvider>
        <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </div>
  )
}

export default App

