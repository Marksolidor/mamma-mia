import React, { useContext } from "react";
import { Button } from "react-bootstrap"
import { ProductsContext } from "../context/InfoProvider";

const Cart = () => {
  const { detail, setDetail } = useContext(ProductsContext);


  return (
    <div className="cart-container">
      <div className="detail-tittle">
        <h2>Detalles del Pedido</h2>
      </div>

      <div className="detail-imag">
        {detail.map((p) => (
          <div className="order-container" key={p.id}>
            <div className="container-name">
            <img className="order-img" src={p.img} alt={p.img} />
              <label classname="name"> {p.name}</label>
            </div>
            <div className="amount-container">
              <label>${p.price}</label>
              <Button>
                -
              </Button>
              <label> 1 </label>
              <Button>
                +
              </Button>
            </div>
          </div>
        ))}
        <div>
          <h3 className="resultcart">
            Total Pedido $
          </h3>
          <Button>Ir a Pagar</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;