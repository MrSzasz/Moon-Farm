// =========================  STYLES  =========================

import "./ContinueShoppingButton.scss";


// =========================  LIBRARIES  =========================

import { Link, useParams } from "react-router-dom";

// =========================  CUSTOM IMPORTS  =========================

import { useNightContext } from "../../context/NightContext/NightContext";



const ContinueShoppingButton = () => {

  const { isNight } = useNightContext();

  const { seasonUrl } = useParams();


  // ==========  RETURN  ========== //

  return (
    <div className="continueShopping">
      <Link to={`/tienda/${seasonUrl}`} className={`btn mainButton ${isNight && 'mainButtonNight'}`}>
        &lt; SEGUIR COMPRANDO
      </Link>
      <Link to="/carrito" className={`btn mainButton ${isNight && 'mainButtonNight'}`}>
        CARRITO &gt;
      </Link>
    </div>
  );
};

export default ContinueShoppingButton;
