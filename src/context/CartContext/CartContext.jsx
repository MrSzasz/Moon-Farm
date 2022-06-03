import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [totalOfCart, setTotalOfCart] = useState();
  const [customerOrder, setCustomerOrder] = useState({});

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

  function getDataForOrder(e) {
    e.preventDefault();
    const todayDate = new Date();
    const orderName = document.getElementById("inputOrderName").value;
    const orderMail = document.getElementById("inputOrderMail").value;
    const orderNumber = document.getElementById("inputOrderNumber").value;
    const orderCountry = document.getElementById("inputOrderCountry").value;
    const orderCity = document.getElementById("inputOrderCity").value;
    const orderText = document.getElementById("inputOrderText").value;
    let customerOrder;
    (orderName!=''&&orderMail!=''&&orderNumber!='' && orderCountry!=''&&orderCity!='') &&
      (customerOrder = {
        buyer: {
          customerName: orderName,
          customerMail: orderMail,
          customerPhone: orderNumber,
          customerResidence: `${orderCity}, ${orderCountry}`,
          customerExtra: orderText,
        },
        items: cartList.map((itemForOrder) => ({
          id: itemForOrder.id,
          title: `${itemForOrder.season}, bundle ${itemForOrder.detailUrl}`,
          quantity: itemForOrder.qtyOnCart,
          price: itemForOrder.price * itemForOrder.qtyOnCart,
        })),
        todayDate,
        totalOfCart,
      }

    )
    
    const db = getFirestore()
    const queryCollection = collection(db, "orders")
    addDoc(queryCollection, customerOrder)
    .then((res)=> res&&window.location.reload())
    
  }

  function clearCart() {
    setCartList([]);
  }

  function calculateTotalItemsOfCart() {
    return cartList.reduce(
      (accumulator, item) => (accumulator += item.qtyOnCart),
      0
    );
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
        calculateTotalItemsOfCart,
        getDataForOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
