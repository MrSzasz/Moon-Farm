import { useState } from "react";
import { ImMinus, ImPlus } from "react-icons/im";
import { useNightContext } from "../../context/NightContext/NightContext";
import "./ItemCount.scss";

function ItemCount({ stock, initial, onAdd, selectedPack }) {
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
  const {isNight} = useNightContext();

  return (


    <div className="counterContainer">
      <div className="counterControl">
        <button className="btn btn-danger" onClick={removeCounter}>
          <ImMinus />
        </button>
        <p className={`counterStatus px-5 ${isNight? 'counterNight' : ""}`}>{counter}</p>
        <button className="btn btn-success" onClick={addCounter}>
          <ImPlus />
        </button>
      </div>
      <button className={`btn mainButton ${isNight && 'mainButtonNight addToCartNight'}`} onClick={() => onAdd(counter, selectedPack)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
