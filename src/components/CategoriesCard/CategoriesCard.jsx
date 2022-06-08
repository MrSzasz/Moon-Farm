// =========================  STYLES  =========================

import "./CategoriesCard.scss"

// =========================  CUSTOM IMPORTS  =========================

import { useNightContext } from "../../context/NightContext/NightContext";



const CategoriesCard = ({ name, className }) => {

  const { isNight } = useNightContext();

  return (
    <div className={`shopCard ${isNight ? "shopCardNight" : ""}`}>
      <div className="mainShopCardTitle text-center">{name}</div>
      <div className={`backCard ${isNight ? className + 'Night' : className}`}></div>
    </div>
  );
};

export default CategoriesCard;
