import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.scss";
import { getFetch } from "../../helpers/getFetch";
import { useNightContext } from "../../context/NightContext/NightContext";

const ItemListContainer = () => {
  const [packsFromList, setPacksFromList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { seasonUrl } = useParams();

const {isNight} = useNightContext();

  useEffect(() => {
    getFetch()
      .then((res) => setPacksFromList(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setFilteredList(
      packsFromList.filter((seasonPack) => seasonPack.season == seasonUrl)
    );
  });

  return (
    <div className={`d-flex flex-wrap w-100 justify-content-center align-items-center containerPacks ${isNight?'nightContainer':""}`}>
      {loading ? (
        <div className={`text-center loadingDiv ${isNight?'loadingNight':""}`}>
        <span className="loader">
          <span className="loader-inner"></span>
        </span>
        <h2 className="mt-4">LOADING...</h2>
      </div>
      ) : (
        <div className="mainPacks">
          <h2>{seasonUrl.toUpperCase()}</h2>
          <ItemList packs={filteredList}/>
          <Link className={`btn mainButton ${isNight?'mainButtonNight':""}`}  to="/tienda">
            &lt; VOLVER
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
