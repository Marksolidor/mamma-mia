import React from "react";
import { Col, Row } from "react-bootstrap";
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


  return (
    <>
      <h1>Home</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.map((item) => (
          <Col key={item.id}>
            <div className="card-container">
              <div>
                <img className="img-fluid" alt={item.name} src={item.img}></img>
              </div>
              <div>
                <h2>{item.name} </h2>
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
                <button type="button" class="btn btn-primary"
                onClick={() => navigate(`/pizza/${item.id}`)}
                >
                  Ver más
                </button>
                <button type="button" class="btn btn-success" onClick={() => addCart(item)}> 
                  🛒 Agregar
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
