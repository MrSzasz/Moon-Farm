import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/CartContext";
import { useNightContext } from "../../context/NightContext/NightContext";
import "./Cart.scss";

const Cart = () => {
  const { cartList, clearCart, removeFromCart, totalOfCart } = useCartContext();

  const { isNight } = useNightContext();

  return (
    <div
      className={`cartContainer text-center ${
        isNight ? "cartContainerNight" : undefined
      }`}
    >
      {cartList.length === 0 ? (
        <>
          {" "}
          <h2>Tal vez deberías ir a buscar algo a la tienda...</h2>{" "}
          <Link
            to="/tienda"
            className={`btn mainButton w-25 m-auto ${
              isNight ? "mainButtonNight" : undefined
            }`}
          >
            TIENDA &gt;
          </Link>{" "}
        </>
      ) : (
        <>
          <table className={`table table-hover ${isNight?'nightTable':undefined}`}>
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
              className={`btn mainButton m-auto w-25 ${isNight? "mainButtonNight":undefined}`}
              onClick={() => {
                clearCart();
              }}
            >
              Vaciar carrito
            </button>
            <button className={`btn mainButton m-auto w-25 ${isNight? "mainButtonNight":undefined}`}>
              Terminar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
