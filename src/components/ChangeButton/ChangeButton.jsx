import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ChangeButton.scss";
import ContinueShoppingButton from "../ContinueShoppingButton/ContinueShoppingButton";
import { useCartContext } from "../../context/CartContext/CartContext";

const ChangeButton = ({ stockFromObject, selectedPack }) => {
  const [showButton, setShowButton] = useState(false);

  const { addToCartList } = useCartContext();

  const changeOnClick = (counter, itemForCart) => {
    setShowButton(true);
    addToCartList({ ...itemForCart, qtyOnCart: counter });
  };


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
