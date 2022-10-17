import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductsContext } from "../context/InfoProvider";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { products, detail, setDetail } = React.useContext(ProductsContext);
  const navigate = useNavigate();

  const addCart = (element) =>{
  setDetail([
    ...detail,
    {
      idProduct: element.id,
      name: element.name,
      amount: 1,
      price: element.price,
      img: element.img,
    },
  ]);
}
const isPizzaInCart = cartItems.find((item) => item.id === pizza.id);
        if (isPizzaInCart) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === pizza.id
                        ? { ...isPizzaInCart, quantity: isPizzaInCart.quantity + 1 }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...pizza, quantity: 1 }]);
        }
console.log(detail)

  return (
    <>
      <h1>Home</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.map((item) => (
          <Col key={item.id}>
            <div className="card-container">
              <div>
                <img className="img-fluid mb-3" alt={item.name} src={item.img}></img>
              </div>
              <div>
                <div className="display-info-container">
                <h2>{item.name} </h2>
                <Button type="button" className="btn btn-primary"
                onClick={() => navigate(`/pizza/${item.id}`)}
                >
                  Ver más
                </Button>
                </div>
                <hr></hr>
                <h4>Ingredientes</h4>
                <ul>
                  {item.ingredients.map((ingredient) => (
                    <li key={ingredient}>🍕 {ingredient}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span>{item.price}</span>
              </div>
              <div className="buttons">
                <Button type="button" className="btn btn-success w-100" onClick={() => addCart(item)}> 
                  🛒 Agregar
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
