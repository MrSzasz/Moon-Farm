import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

const Cart = () => {

const {cartList} = useContext(CartContext)

useEffect(() => {
  console.log(cartList)
}, [])

  return (
    <div className="text-center m-auto">
      <h2> cart </h2>
    </div>
  );
};

export default Cart;
