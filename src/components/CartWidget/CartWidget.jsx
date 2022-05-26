import "./CartWidget.scss";
import { BsFillBasket2Fill } from "react-icons/bs";
import { CgSmileSad } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/CartContext";

function CartWidget() {

const {calculateTotalItemsOfCart} = useCartContext(); 

  return (
    <Link to="/carrito" className="linkOnNavBar">
      <li>
        <BsFillBasket2Fill className="cartWidget" size={28} />
      </li>
        <span className="cartSpan">{calculateTotalItemsOfCart()===0?<CgSmileSad size={20}/>:calculateTotalItemsOfCart()}</span>
    </Link>
  );
}

export default CartWidget;
