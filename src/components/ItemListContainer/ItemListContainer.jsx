import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.scss";
import { useNightContext } from "../../context/NightContext/NightContext";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { seasonUrl } = useParams();

  const { isNight } = useNightContext();

  useEffect(() => {
    const db = getFirestore();

    const queryCollection = collection(db, "products");

    const queryCollectionFiltered = query(
      queryCollection,
      where("season", "==", seasonUrl)
    );
    const orderedProductList = query(
      queryCollectionFiltered,
      orderBy("idForItem")
    );

    getDocs(orderedProductList)
      .then((res) =>
        setFilteredList(
          res.docs.map((item) => ({ ...item.data(), id: item.id }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div
      className={`d-flex flex-wrap w-100 justify-content-center align-items-center containerPacks ${
        isNight ? "nightContainer" : ""
      }`}
    >
      {loading ? (
        <div
          className={`text-center loadingDiv ${isNight ? "loadingNight" : ""}`}
        >
          <span className="loader">
            <span className="loader-inner"></span>
          </span>
          <h2 className="mt-4">LOADING...</h2>
        </div>
      ) : (
        <div className="mainPacks">
          <h2>{seasonUrl.toUpperCase()}</h2>
          <ItemList packs={filteredList} />
          <Link
            className={`btn mainButton ${isNight ? "mainButtonNight" : ""}`}
            to="/tienda"
          >
            &lt; VOLVER
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
