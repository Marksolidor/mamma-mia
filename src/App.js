import { Routes, Route } from "react-router-dom";
import {Home} from "./views/Home";
import {Pizza} from "./views/Pizza";
import {Cart} from "./views/Cart";
import Navbar from "./components/Navbar";

export default function App() {
  return (
<>
      <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>

</>

  );
}

