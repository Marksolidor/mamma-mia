import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { ProductsContext } from "../context/InfoProvider";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContext";

const Pizza = () => {
    const { products } = useContext(ProductsContext);
    const { id } = useParams();
    const { addCart } = React.useContext(cartContext);
  
    return (
      <div className="product-container">
          {products.filter((a) => a.id === id)
            .map((item) => (
              <div key={item.id}>
                                                  <h2 className="text-center">{item.name} </h2>
                    <hr></hr>
              <div className="pizza-container d-flex row row-cols-1 row-cols-md-2 g-4">
                <div className="img-container col">
                <img className="img-fluid pizza-detail" src={item.img} alt={item.name} />
                </div>
                <div className="info-container col">
                  <div className="name-container">
                  </div>
                  <div className="desc-container">
                    <p>{item.desc}</p>
                  </div>
                  <div className="topping-container">
                    <h3>Ingredientes</h3>
                    <ul>
                  {item.ingredients.map((ingredient) => (
                    <li key={ingredient}>🍕 {ingredient}</li>
                  ))}
                </ul>
                <div className="price-container d-flex justify-content-between flex-grap">
                <h2>${item.price}</h2>
                <Button type="button" className="btn btn-success" onClick={() => addCart(item)}> 
                  🛒 Agregar
                </Button>
                </div>
                  </div>
                  <div className="buttons">
                    <Link to="/">
                  <Button type="button" className="btn btn-primary w-100 mt-2">
                    Seguir Comprando
                  </Button>
                  </Link>
                </div>
                </div>
              </div>
              </div>
            ))}
      </div>
    );
  };

  export default Pizza;