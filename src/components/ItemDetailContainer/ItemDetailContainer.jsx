import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.scss";
import { getFetch } from "../../helpers/getFetch";

const ItemDetailContainer = ({ classForNight }) => {
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { seasonUrl } = useParams();

  useEffect(() => {
    getFetch()
      .then((res) =>
        res.filter((filteredRes) => filteredRes.season == seasonUrl)
      )
      .then((res) => setFilteredList(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  // return (
  //   <div className="d-flex flex-wrap w-100 justify-content-around gap-4 p-4 containerDetails">
  //     <ItemDetail pack={filteredList} isNight={classForNight} />
  //   </div>
  // );
  return (
    <div className="d-flex flex-wrap w-100 justify-content-around gap-4 p-4 containerDetails">
      {loading ? (
        <div className={`text-center loadingDiv ${classForNight&&'loadingNight'}`} >
          <span class="loader">
            <span class="loader-inner"></span>
          </span>
          <h2 className="mt-4">LOADING...</h2>
        </div>
      ) : (
        <ItemDetail pack={filteredList} isNight={classForNight} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
