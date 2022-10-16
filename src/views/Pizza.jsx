import React, { useContext } from "react";
import { ProductsContext } from "../context/InfoProvider";
import { useParams } from "react-router-dom";

const Pizza = () => {
    const { products } = useContext(ProductsContext);
    const { id } = useParams();
  
    return (
      <div className="product-container">
          {products.filter((a) => a.id === id)
            .map((item) => (
              <div className="img-container">
                <img className="img-fluid" src={item.img} alt={item.name} />
                <div className="info-container">
                  <div className="name-container">
                  <h2>{item.name} </h2>
                    <hr></hr>
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
                <div className="price-container">
                <h2>${item.price}</h2>
                </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    );
  };

  export default Pizza;