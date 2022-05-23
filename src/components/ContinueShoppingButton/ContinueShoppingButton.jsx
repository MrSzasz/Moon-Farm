import React from "react";
import { Link, useParams } from "react-router-dom";

const ContinueShoppingButton = () => {
  const { seasonUrl } = useParams();

  return (
    <div className="d-flex justify-content-center">
      <Link to={`/tienda/${seasonUrl}`} className={`btn mainButton`}>
        SEGUIR COMPRANDO
      </Link>
      <Link to="/carrito" className={`btn mainButton`}>
        CARRITO
      </Link>
    </div>
  );
};

export default ContinueShoppingButton;
