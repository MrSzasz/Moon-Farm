import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/CartContext";
import { useNightContext } from "../../context/NightContext/NightContext";
import "./Cart.scss";

const Cart = () => {
  // const [customerOrder, setCustomerOrder] = useState({});

  const { cartList, clearCart, removeFromCart, totalOfCart } = useCartContext();

  const { isNight } = useNightContext();

  // function getDataForOrder() {
  //   // setCustomerOrder({
  //   //   buyer: { name, phone, email },
  //   //   items: [{ id, title, price }],
  //   //   total
  //   // });
  //   console.log(customerOrder);
  //   setCustomerOrder({
  //     buyer: {
  //       customerName: "tomas",
  //       customerPhone: 1155224433,
  //       customerEmail: "lugoleandro@hotmail.com",
  //     },
  //     items: cartList.map((itemForOrder) => ({
  //       id: itemForOrder.id,
  //       title: `${itemForOrder.season}, bundle ${itemForOrder.detailUrl}`,
  //       price: itemForOrder.price * itemForOrder.qtyOnCart,
  //     })),
  //     totalOfCart,
  //   });
  // } 

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
          <div className="d-flex justify-content-between">
            <button
              className={`btn mainButton m-auto w-25 ${
                isNight ? "mainButtonNight" : ""
              }`}
              onClick={() => {
                clearCart();
              }}
            >
              Vaciar carrito
            </button>
            <Link to="/finalizar-compra"
              className={`btn mainButton m-auto w-25 ${
                isNight ? "mainButtonNight" : ""
              }`}
              onClick={() => getDataForOrder()}
            >
              Terminar compra
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
