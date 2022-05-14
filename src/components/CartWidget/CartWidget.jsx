import "./CartWidget.css";
import { BsFillBasket2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <Link to="/carrito">
      <li>
        <a href="#">
          <BsFillBasket2Fill />
        </a>
      </li>
    </Link>
  );
}

export default CartWidget;
