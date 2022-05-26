import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.scss";
import { getFetch } from "../../helpers/getFetch";
import { useNightContext } from "../../context/NightContext/NightContext";

const ItemDetailContainer = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { seasonUrl } = useParams();

  const {isNight} = useNightContext();

  useEffect(() => {
    getFetch()
      .then((res) =>
        res.filter((filteredRes) => filteredRes.season == seasonUrl)
      )
      .then((res) => setFilteredList(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="d-flex flex-wrap w-100 justify-content-around gap-4 p-4 containerDetails">
      {loading ? (
        <div className={`text-center loadingDiv ${isNight?'loadingNight':undefined}`} >
          <span className="loader">
            <span className="loader-inner"></span>
          </span>
          <h2 className="mt-4">LOADING...</h2>
        </div>
      ) : (
        <ItemDetail pack={filteredList}/>
      )}
    </div>
  );
};

export default ItemDetailContainer;
