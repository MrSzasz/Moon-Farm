// =========================  LIBRARIES  =========================

import { toast } from 'react-hot-toast';
import { createContext, useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";



const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {

  const [cartList, setCartList] = useState([]);
  const [totalOfCart, setTotalOfCart] = useState();
  const [orderId, setOrderId] = useState("")


  // ==========  ADD TO CART  ========== //

  function addToCartList(item) {
    const indexOfItemOnCart = cartList.findIndex(
      (itemOnCart) => itemOnCart.id === item.id
    );
    if (indexOfItemOnCart !== -1) {
      cartList[indexOfItemOnCart].qtyOnCart += item.qtyOnCart;
      setCartList([...cartList])
    } else {
      setCartList([...cartList, item]);
    }
  }


  // ==========  REMOVE FROM CART  ========== //

  function removeFromCart(e) {
    const clickedButton = e.target;
    const getProdId = clickedButton.closest("tr").dataset.productid;
    const indexOfItemOnCart = cartList.findIndex(
      (itemOnCart) => itemOnCart.id === getProdId
    );
    cartList.splice(indexOfItemOnCart, 1);
    setCartList([...cartList]);
  }


  // ==========  CHANGE STOCK FROM CART  ========== //

  async function changeStock() {
    const db = getFirestore();
    const queryCollectionStock = collection(db, "products");

    const queryChangeStock = await query(
      queryCollectionStock,
      where(
        documentId(),
        "in",
        cartList.map((item) => item.id)
      )
    );

    const batch = writeBatch(db);
    await getDocs(queryChangeStock).then((res) =>
      res.docs.forEach((res) =>
        batch.update(res.ref, {
          stock:
            res.data().stock -
            cartList.find((item) => item.id === res.id).qtyOnCart,
        })
      )
    );
    batch.commit();
  }


  // ==========  SET & PUSH ORDER  ========== //

  function getDataForOrder(e) {
    const todayDate = new Date();
    const orderName = document.getElementById("inputOrderName").value;
    const orderMail = document.getElementById("inputOrderMail").value;
    const orderNumber = document.getElementById("inputOrderNumber").value;
    const orderCountry = document.getElementById("inputOrderCountry").value;
    const orderCity = document.getElementById("inputOrderCity").value;

    if (
      orderName != "" &&
      orderMail != "" &&
      orderNumber != "" &&
      orderCountry != "" &&
      orderCity != ""
    ) {

      let customerOrder = {

        buyer: {
          customerName: orderName,
          customerMail: orderMail,
          customerPhone: orderNumber,
          customerResidence: `${orderCity}, ${orderCountry}`,
        },
        items: cartList.map((itemForOrder) => ({
          id: itemForOrder.id,
          title: `${itemForOrder.season}, bundle ${itemForOrder.detailUrl}`,
          quantity: itemForOrder.qtyOnCart,
          price: itemForOrder.price * itemForOrder.qtyOnCart,
        })),
        todayDate,
        totalOfCart,

      };

      changeStock();

      const db = getFirestore();

      const queryCollection = collection(db, "orders");

      addDoc(queryCollection, customerOrder)
        .then((res) =>
        (toast.success(`¡Gracias por comprar! 
Su código de orden es:
${res.id}.
Esté atento a su mailbox`, {
          className: "toastStyle",
          style: {
            minWidth: '320px',
          },
          duration: 6900,
          position: "bottom-right"
        })))
    }
  }


  // ==========  CLEAR ITEMS ON CART  ========== //

  function clearCart() {
    setCartList([]);
  }


  // ==========  CALCULATE TOTAL PRICE OF CART  ========== //

  function calculateTotalItemsOfCart() {
    return cartList.reduce(
      (accumulator, item) => (accumulator += item.qtyOnCart),
      0
    );
  }


  // ==========  SET TOTAL OF CART  ========== //

  useEffect(() => {
    const calculatedTotal = cartList.reduce(
      (accumulator, item) => accumulator + item.price * item.qtyOnCart,
      0
    );
    setTotalOfCart(calculatedTotal);
  });


  // ==========  RETURN  ========== //

  return (
    <CartContext.Provider
      value={{
        orderId,
        cartList,
        getDataForOrder,
        calculateTotalItemsOfCart,
        changeStock,
        totalOfCart,
        removeFromCart,
        addToCartList,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;




