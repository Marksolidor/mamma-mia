import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductsContext } from "../context/InfoProvider";
import { cartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { products } = React.useContext(ProductsContext);
  const { addCart } = React.useContext(cartContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-hero text-center mb-3 text-light bg-dark">
        <h1 className="text-hero">Pizzería Mamma Mia!</h1>
        <h6 className="text-hero">¡Tenemos las mejores pizzas que podrás encontrar!</h6>
        </div>
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
                <p className="text-end price">${item.price}</p>
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
