import "./CategoriesCard.scss"

const CategoriesCard = ({ name, className }) => {
  return (
    <div className="shopCard">
      <div className="mainShopCardTitle text-center">{name}</div>
      <div className={`backCard ${ className }`}></div>
    </div>
  );
};

export default CategoriesCard;
