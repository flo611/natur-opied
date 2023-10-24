import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [basketCount, setBasketCount] = useState(0);
  const [totalBasket, setTotalBasket] = useState(0);
  const [totalArrayBasket, setTotalArrayBasket] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const total = JSON.parse(localStorage.getItem("total") || "[]");

  useEffect(() => {
    setBasket(cart);
    setTotalBasket(total);
  }, []);

  return (
    <CartContext.Provider
      value={{
        basket,
        setBasket,
        basketCount,
        setBasketCount,
        totalArrayBasket,
        setTotalArrayBasket,
        totalBasket,
        setTotalBasket,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
