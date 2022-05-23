import { useState } from "react";
// import { useState, useContext } from "react";
// import {useContext} from "react"

import ItemCount from "../ItemCount/ItemCount";
import "./ChangeButton.scss";
import ContinueShoppingButton from "../ContinueShoppingButton/ContinueShoppingButton";
// import { CartContext } from "../../context/CartContext/CartContext";


const ChangeButton = ({ stockFromObject, selectedItem }) => {
  const [showButton, setShowButton] = useState(false);

  // const { cartList, addToCart } = useContext(CartContext);

  // const changeOnClick = (counter) => {
  //   setShowButton(true);
  //   addToCart({selectedItem});
  //   alert(selectedItem);
  // };

  function changeOnClick(counter){
    setShowButton(true);
    // addToCart({...selectedItem, qty: counter});
    // addToCart({cantidad:counter});
    // alert(selectedItem);
    // alert(counter)
    // console.log('this is cartList: '+cartList)
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
