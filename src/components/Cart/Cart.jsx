import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/CartContext";
import { useNightContext } from "../../context/NightContext/NightContext";
import ModalBase from "../ModalBase/ModalBase";
import "./Cart.scss";

const Cart = () => {
  const { cartList, clearCart, removeFromCart, totalOfCart } = useCartContext();

  const { isNight } = useNightContext();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div
      className={`cartContainer text-center ${
        isNight ? "cartContainerNight" : ""
      }`}
    >
      {cartList.length === 0 ? (
        <>
          {" "}
          <h2>Tal vez deberías ir a buscar algo a la tienda...</h2>{" "}
          <Link
            to="/tienda"
            className={`btn mainButton w-25 m-auto ${
              isNight ? "mainButtonNight" : ""
            }`}
          >
            TIENDA &gt;
          </Link>{" "}
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
          <div className="d-flex justify-content-around">
            <button
              className={`btn mainButton w-25 ${
                isNight ? "mainButtonNight" : ""
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
