import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  function addToCartList(item) {
    setCartList(item);
  }

  return (
    <CartContext.Provider value={{ cartList, addToCartList }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
