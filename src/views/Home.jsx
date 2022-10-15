import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import storeItems from "../data/pizzas.json";

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
<div className="card-container">
<div>
                <img className="img-fluid" src={item.img}></img>
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
            <button type="button" class="btn btn-primary">Ver más</button>
            <button type="button" class="btn btn-success">🛒 Agregar</button>
            </div>
</div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Home;
