// =========================  STYLES  =========================

import "./ChangeButton.scss";

// =========================  LIBRARIES  =========================

import { useState } from "react";

// =========================  CUSTOM IMPORTS  =========================

import { useCartContext } from "../../context/CartContext/CartContext";

// ----------  COMPONENTS  ----------

import ItemCount from "../ItemCount/ItemCount";
import ContinueShoppingButton from "../ContinueShoppingButton/ContinueShoppingButton";



const ChangeButton = ({ stockFromObject, selectedPack }) => {

  const [showButton, setShowButton] = useState(false);

  const { addToCartList } = useCartContext();


  // ==========  ADD ITEMS TO CART  ========== //

  const changeOnClick = (counter, itemForCart) => {
    setShowButton(true);
    addToCartList({ ...itemForCart, qtyOnCart: counter });
  };


  // ==========  RETURN  ========== //

  return (
    <>
      {showButton ? (
        <ContinueShoppingButton />
      ) : (
        <ItemCount
          stock={stockFromObject}
          initial={1}
          onAdd={changeOnClick}
          selectedPack={selectedPack}
        />
      )}
    </>
  );
};

export default ChangeButton;
