import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () =>useContext(CartContext)

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  function addToCartList(item) {
    setCartList([...cartList,item]);
  }

  function clearCart() {
    setCartList([]);
  }

  return (
    <CartContext.Provider value={{ cartList, addToCartList, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
