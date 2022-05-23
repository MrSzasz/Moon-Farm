import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ChangeButton.scss";
import ContinueShoppingButton from "../ContinueShoppingButton/ContinueShoppingButton";
import { useCartContext } from "../../context/cartContext/cartContext";


const ChangeButton = ({ stockFromObject, selectedPack }) => {
  const [showButton, setShowButton] = useState(false);

const {addToCartList} = useCartContext()

  const changeOnClick = (counter, itemForCart) => {
    setShowButton(true);
    addToCartList({itemForCart, qty:counter})
    alert(`Agregaste ${counter} objeto/s al carrito`);
  };

  return (
    <>
      {showButton ? (
        <ContinueShoppingButton />
      ) : (
        <ItemCount stock={stockFromObject} initial={1} onAdd={changeOnClick} selectedPack={selectedPack}/>
      )}
    </>
  );
};

export default ChangeButton;
