import { useContext } from "react";
import { CartContext } from "../../context/cartContext/cartContext";

const Cart = () => {


const {cartList} = useContext(CartContext)

  return (
      // <div><button onClick={()=>{console.log('hola')}}>cartlist</button></div>
      <div><button onClick={()=>{console.log(cartList)}}>cartlist</button></div>
  );
};

export default Cart;
