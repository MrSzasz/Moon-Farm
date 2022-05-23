import { useState } from "react";
import { ImMinus, ImPlus } from "react-icons/im";
import "./ItemCount.scss";

import {useContext} from "react";
import {CartContext} from "../../context/CartContext/CartContext"

function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const addCount = (quantity) => {
    setCounter(counter+quantity)
  }

  return (
    <div className="counterContainer">
      <div className="counterControl">
        <button
          className="btn btn-danger"
          onClick={()=>addCount(-1)}
          disabled={counter === 1 ? true : false}
        >
          <ImMinus />
        </button>
        <p className="counterStatus px-5">{counter}</p>
        <button
          className="btn btn-success"
          onClick={()=>addCount(1)}
          disabled={counter === stock ? true : false}
        >
          <ImPlus />
        </button>
      </div>
      <button className={`btn mainButton`} onClick={() => onAdd(counter)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
