// =========================  STYLES  =========================

import "./ItemDetailContainer.scss";

// =========================  LIBRARIES  =========================

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// =========================  CUSTOM IMPORTS  =========================

import { useNightContext } from "../../context/NightContext/NightContext";

// ----------  COMPONENTS  ----------

import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = () => {
  
  const { isNight } = useNightContext();
  
  const [filteredList, setFilteredList] = useState({});
  const [loading, setLoading] = useState(true);
  const { packDetail } = useParams();


  // ==========  GET DATA FROM DATABASE  ========== //

  useEffect(() => {
    const db = getFirestore();

    const dbQuery = doc(db, "products", packDetail);

    getDoc(dbQuery)
      .then((res) => setFilteredList({ ...res.data(), id: res.id }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);


  // ==========  RETURN  ========== //

  return (
    <div className="d-flex flex-wrap w-100 justify-content-around gap-4 p-4 containerDetails">
      {loading ? (
        <div
          className={`text-center loadingDiv ${isNight ? "loadingNight" : ""}`}
        >
          <span className="loader">
            <span className="loader-inner"></span>
          </span>
          <h2 className="mt-4">CARGANDO...</h2>
        </div>
      ) : (
        <ItemDetail pack={filteredList} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
