import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.scss";
import { getFetch } from "../../helpers/getFetch";



const ItemListContainer = ({ classForNight }) => {
  const [packsFromList, setPacksFromList] = useState([]);
  const [isNight, setIsNight] = useState();
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { seasonUrl } = useParams();

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

  useEffect(() => {
    classForNight&&
    setIsNight(
      'nightContainer'
    )
  });


  return (
    <div className={`d-flex flex-wrap w-100 justify-content-center align-items-center containerPacks ${isNight}`}>
      {loading ? (
        <div className={`text-center loadingDiv ${classForNight&&'loadingNight'}`}>
        <span class="loader">
          <span class="loader-inner"></span>
        </span>
        <h2 className="mt-4">LOADING...</h2>
      </div>
      ) : (
        <div className="mainPacks">
          <h2>{seasonUrl.toUpperCase()}</h2>
          <ItemList packs={filteredList} isNight={classForNight} />
          <Link className={`btn mainButton ${isNight && 'mainButtonNight'}`}  to="/tienda">
            &lt; VOLVER
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
