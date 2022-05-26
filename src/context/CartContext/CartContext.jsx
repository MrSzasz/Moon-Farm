import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [totalOfCart, setTotalOfCart] = useState();

  function addToCartList(item) {
    const indexOfItemOnCart = cartList.findIndex(
      (itemOnCart) => itemOnCart.id === item.id
    );
    if (indexOfItemOnCart !== -1) {
      cartList[indexOfItemOnCart].qtyOnCart += item.qtyOnCart;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, item]);
    }
  }

  function removeFromCart(e) {
    const clickedButton = e.target;
    const getProdId = clickedButton.closest("tr").dataset.productid;
    const indexOfItemOnCart = cartList.findIndex(
      (itemOnCart) => itemOnCart.id === getProdId
    );
    cartList.splice(indexOfItemOnCart, 1);
    setCartList([...cartList]);
  }

  function clearCart() {
    setCartList([]);
  }

  useEffect(() => {
    const calculatedTotal = cartList.reduce(
      (accumulator, item) => accumulator + item.price * item.qtyOnCart,
      0
    );
    setTotalOfCart(calculatedTotal);
  });

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCartList,
        clearCart,
        removeFromCart,
        totalOfCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
