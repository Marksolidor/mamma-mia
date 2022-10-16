import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductProvider from './context/InfoProvider'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Pizza from "./views/Pizza";
import Cart from "./views/Cart";


function App() {
  return (
    <div className="App">
      <ProductProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
 <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/carrito" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </div>
  )
}

export default App

