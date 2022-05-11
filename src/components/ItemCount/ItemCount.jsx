import { useState } from "react";
import { ImMinus, ImPlus } from "react-icons/im";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

  function addCounter() {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  }

  function removeCounter() {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="counterContainer">
      <h2 className="text-center">Stock disponible <br></br> {stock}</h2>
      <div className="counterControl">
        <button className="btn btn-danger" onClick={removeCounter}>
          <ImMinus />
        </button>
        <p className="counterStatus px-5">{counter}</p>
        <button className="btn btn-success" onClick={addCounter}>
          <ImPlus />
        </button>
      </div>
      <button className="btn btn-primary" onClick={() => onAdd(counter)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
