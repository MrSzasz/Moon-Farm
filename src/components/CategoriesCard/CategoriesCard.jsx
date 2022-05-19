import "./CategoriesCard.scss"

const CategoriesCard = ({ name, className, isNight }) => {
  return (
    <div className={`shopCard ${isNight}`}>
      <div className="mainShopCardTitle text-center">{name}</div>
      <div className={`backCard ${ className }`}></div>
    </div>
  );
};

export default CategoriesCard;
