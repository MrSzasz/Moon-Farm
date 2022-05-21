import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ChangeButton.scss";
import ContinueShoppingButton from "../ContinueShoppingButton/ContinueShoppingButton";

const ChangeButton = ({ stockFromObject }) => {
  const [showButton, setShowButton] = useState(false);

  const changeOnClick = (counter) => {
    setShowButton(true);
    alert(`Agregaste ${counter} objeto/s al carrito`);
  };

  return (
    <>
      {showButton ? (
        <ContinueShoppingButton />
      ) : (
        <ItemCount stock={stockFromObject} initial={1} onAdd={changeOnClick} />
      )}
    </>
  );
};

export default ChangeButton;
