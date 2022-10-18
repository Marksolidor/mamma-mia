import React, { useContext } from "react";
import { Button } from "react-bootstrap"
import { ProductsContext } from "../context/InfoProvider";

const Cart = () => {
  const { detail, setDetail } = useContext(ProductsContext);

  const amountSet = (ac, id, am) => {
    setDetail((current) =>
      current.map((obj) => {
        if (obj.idProduct === id) {
          if (ac === "add") {
            return { ...obj, amount: am * 1 + 1 };
          } else if (ac === "rest" && am > 1) {
            return { ...obj, amount: am * 1 - 1 };
          }
        }
        return obj;
      })
    );
  };

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
            <div className="amount-container d-flex">
              <label>${p.price}</label>
              <Button className="btn-danger"
              onClick={() => amountSet("rest", p.idProduct, p.amount)}
              >
                -
              </Button>
              <label className="m-1"> {p.amount} </label>
              <Button className="btn-success"
              onClick={() => amountSet("add", p.idProduct, p.amount)}
              >
                +
              </Button>
            </div>
          </div>
        ))}
        <div className="total">
          <h3 className="resultcart text-end">
            Total Pedido $ {detail
              .map((item) => item.price * item.amount)
              .reduce((prev, curr) => prev + curr, 0)
              .toLocaleString("de-DE")}
          </h3>
          <Button className="btn btn-success">Ir a Pagar</Button>
        </div>
        <div className="buttons d-flex mt-2">
          <Button className="btn btn-primary">Seguir Comprando</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;