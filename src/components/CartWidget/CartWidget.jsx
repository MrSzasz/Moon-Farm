// =========================  STYLES  =========================

import "./CartWidget.scss";

// =========================  LIBRARIES  =========================

import { Link } from "react-router-dom";
import { BsFillBasket2Fill } from "react-icons/bs";
import { CgSmileSad } from "react-icons/cg";

// =========================  CUSTOM IMPORTS  =========================

import { useCartContext } from "../../context/CartContext/CartContext";
import { useNightContext } from "../../context/NightContext/NightContext";





function CartWidget() {
  const { calculateTotalItemsOfCart } = useCartContext();

  const { isNight } = useNightContext();

  return (
    <Link to="/carrito" className="linkOnNavBar">
      <li>
        <BsFillBasket2Fill className="cartWidget" size={28} />
      </li>
      <span className={`cartSpan ${isNight ? "nightWidget" : ""}`}>
        {calculateTotalItemsOfCart() === 0 ? (
          <CgSmileSad size={20} />
        ) : (
          calculateTotalItemsOfCart()
        )}
      </span>
    </Link>
  );
}

export default CartWidget;
