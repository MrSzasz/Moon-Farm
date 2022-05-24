import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/CartContext";
import "./Cart.scss";

const Cart = () => {
  const { cartList, clearCart } = useCartContext();

  return (
    // <div><button onClick={()=>{console.log('hola')}}>cartlist</button></div>
    <div className="cartContainer">
      {cartList.length === 0 ? (
        <div>
          {" "}
          <h2>Deberias ir a buscar algo a la tienda</h2>{" "}
          <Link to="/tienda">TIENDA &gt;</Link>{" "}
        </div>
      ) : (
        <>
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th className="text-center" scope="col">#</th>
                <th className="text-center" scope="col">Producto</th>
                <th className="text-center" scope="col">Cantidad</th>
                <th className="text-center" scope="col">Precio</th>
                <th className="text-center" scope="col">Eliminar</th>
              </tr>
            </thead>
              {cartList.map((productMapped) => (                
            <tbody>
                <tr>
                  <th className="text-center">{productMapped.id}</th>
                  <td className="text-center">Bundle {productMapped.detailUrl}</td>
                  <td className="text-center">{productMapped.qtyOnCart}</td>
                  <td className="text-center">${productMapped.price}</td>
                  <td className="text-center"><button className="btn btn-danger">X</button></td>
                </tr>
            </tbody>
          ))}
          </table>
          <button
            className={`btn mainButton m-auto w-100`}
            onClick={() => {
              clearCart();
            }}
          >
            Vaciar carrito
          </button>
          <button
            className={`btn mainButton m-auto w-100`}
          >
            Comprar
          </button>
        </>
      )}
      <button
        className="m-auto w-100 btn btn-primary"
        onClick={() => {
          console.log(cartList);
        }}
      >
        CartList
      </button>
    </div>
  );
};

export default Cart;
