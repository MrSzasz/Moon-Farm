// =========================  STYLES  =========================

import "./Cart.scss";

// =========================  LIBRARIES  =========================

import { useState } from "react";
import { Link } from "react-router-dom";

// =========================  CUSTOM IMPORTS  =========================

import { useCartContext } from "../../context/CartContext/CartContext";
import { useNightContext } from "../../context/NightContext/NightContext";

// ----------  COMPONENTS  ----------

import ModalBase from "../ModalBase/ModalBase";



const Cart = () => {

  const { isNight } = useNightContext();
  const { cartList, clearCart, removeFromCart, totalOfCart } = useCartContext();

  const [show, setShow] = useState(false);


  // ==========  FUNCTION FOR MODALS  ========== //

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // ==========  RETURN  ========== //

  return (
    <div
      className={`cartContainer text-center ${isNight ? "cartContainerNight" : ""
        }`}
    >
      {cartList.length === 0 ? (
        <>
          <h2>Tal vez deberías ir a buscar algo a la tienda...</h2>
          <Link
            to="/tienda"
            className={`btn mainButton buttonBack w-25 m-auto ${isNight ? "mainButtonNight" : ""
              }`}
          >
            TIENDA &gt;
          </Link>
        </>
      ) : (
        <>
          <table className={`table table-hover ${isNight ? "nightTable" : ""}`}>
            <thead>
              <tr>
                <th className="text-center" scope="col">
                  Producto
                </th>
                <th className="text-center" scope="col">
                  Cantidad
                </th>
                <th className="text-center" scope="col">
                  Precio
                </th>
                <th className="text-center" scope="col">
                  Eliminar
                </th>
              </tr>
            </thead>
            {cartList.map((productMapped) => (
              <tbody key={productMapped.id}>
                <tr data-productid={productMapped.id}>
                  <td className="text-center text-capitalize">
                    {productMapped.season}, {productMapped.detailUrl}
                  </td>
                  <td className="text-center">{productMapped.qtyOnCart}</td>
                  <td className="text-center">
                    ${productMapped.price * productMapped.qtyOnCart}
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-danger"
                      onClick={(e) => removeFromCart(e)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <h3>Total: ${totalOfCart}</h3>
          <div className="clearOrContinue">
            <button
              className={`btn mainButton w-25 ${isNight ? "mainButtonNight" : ""
                }`}
              onClick={() => {
                clearCart();
              }}
            >
              VACIAR CARRITO
            </button>
            <ModalBase
              buttonName="CONTINUAR"
              show={show}
              handleClose={handleClose}
              handleShow={handleShow}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
