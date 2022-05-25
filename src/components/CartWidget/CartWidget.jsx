import "./CartWidget.css";
import { BsFillBasket2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <Link to="/carrito" className="linkOnNavBar">
      <li>
        <BsFillBasket2Fill />
      </li>
    </Link>
  );
}

export default CartWidget;
