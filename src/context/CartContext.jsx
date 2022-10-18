import React from "react";
import { ProductsContext } from "../context/InfoProvider";

export const cartContext = React.createContext({});

export const CartProvider = ({ children }) => {
  const { detail, setDetail } = React.useContext(ProductsContext);

  const addCart = (element) => {
    if (detail.filter((e) => e.idProduct === element.id).length > 0) {
      setDetail((current) =>
        current.map((obj) => {
          if (obj.idProduct === element.id) {
            return { ...obj, amount: obj.amount * 1 + 1 };
          }
          return obj;
        })
      );
    } else if (detail.filter((e) => e.idProduct === element.id).length === 0) {
      setDetail([
        ...detail,
        {
          id: detail.length + 1,
          idProduct: element.id,
          name: element.name,
          amount: 1,
          price: element.price,
          img: element.img,
        },
      ]);
    }
  };

  const removeCart = (element) => {
    setDetail(detail.filter((item) => item.idProduct !== element.idProduct));
  };

  const clearCart = () => {
    setDetail([]);
  };


  return (
    <cartContext.Provider
      value={{
        addCart,
        removeCart,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
