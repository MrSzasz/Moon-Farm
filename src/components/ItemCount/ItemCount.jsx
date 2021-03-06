// =========================  STYLES  =========================

import "./ItemCount.scss";

// =========================  LIBRARIES  =========================

import { useState } from "react";
import { ImMinus, ImPlus } from "react-icons/im";

// =========================  CUSTOM IMPORTS  =========================

import { useNightContext } from "../../context/NightContext/NightContext";



function ItemCount({ stock, initial, onAdd, selectedPack }) {

  const { isNight } = useNightContext();

  const [counter, setCounter] = useState(initial);


  // ==========  COUNTERS  ========== //

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


  // ==========  RETURN  ========== //

  return (
    <div className="counterContainer">
      {stock === 0 ? (
        <div className="text-center p-3">
          <h2 className="pb-2">OH NO</h2>
          <h5>
            No disponemos de stock en este momento, pero no desesperes,
            ¡seguramente mañana tengamos más en stock!
          </h5>
        </div>
      ) : (
        <>
          <div className="counterControl">
            <button className="btn btn-danger" onClick={removeCounter}>
              <ImMinus />
            </button>
            <p
              className={`counterStatus px-5 ${isNight ? "counterNight" : ""}`}
            >
              {counter}
            </p>
            <button className="btn btn-success" onClick={addCounter}>
              <ImPlus />
            </button>
          </div>
          <button
            className={`btn mainButton ${isNight && "mainButtonNight addToCartNight"
              }`}
            onClick={() => onAdd(counter, selectedPack)}
          >
            AGREGAR AL CARRITO
          </button>
        </>
      )}
    </div>
  );
}

export default ItemCount;
