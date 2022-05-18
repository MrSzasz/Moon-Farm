import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Item from "../Item/Item";
import "./ItemDetail.scss";

const ItemDetail = ({ pack }) => {
  const [filteredPickFromPack, setFilteredPickFromPack] = useState([]);

  const { seasonUrl } = useParams();
  const { packDetail } = useParams();

  useEffect(() => {
    setFilteredPickFromPack(
      pack.filter((filteredBundle) => filteredBundle.detailUrl === packDetail)
    );
  });

  console.log(pack);

  return (
    <div className="infoCard">
      <h2 className="text-uppercase">{packDetail}</h2>
      <div className="infoContainer">
        <div className="prodInfo">
          {filteredPickFromPack.map((mappedData) => (
            <Item
              key={mappedData.id}
              className={mappedData.className}
              url={mappedData.detailUrl}
              image1={mappedData.image1}
              image2={mappedData.image2}
              image3={mappedData.image3}
              image4={mappedData.image4}
              image5={mappedData.image5}
            />
          ))}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            eos ratione, excepturi mollitia beatae quisquam. Magnam assumenda
            reiciendis consequatur voluptas explicabo nisi, modi qui praesentium
            atque dolorem reprehenderit sint dolor sit illo ad eum repellendus
            nemo provident quaerat ut hic, ullam incidunt at! Minus ipsum
            tenetur distinctio aut, enim illum!
            <hr></hr>
            Precio: $
          </p>
        </div>
        <div className="recipe text-center">
          <div className="buttonsRecipe text-center">
            <Link className="btn mainButton" to={`/tienda/${seasonUrl}`}>
              &lt; VOLVER
            </Link>
            <button
              className="btn mainButton"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              RECETAS
            </button>
            <button className="btn mainButton">+ CARRITO</button>
          </div>
          <div className="collapse" id="collapseExample">
            <div className="expandedRecipe">
              <h2 className="text-center">TITULO</h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;