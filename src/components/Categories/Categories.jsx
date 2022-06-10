// =========================  STYLES  =========================

import "./Categories.scss";

// =========================  LIBRARIES  =========================

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";

// =========================  CUSTOM IMPORTS  =========================

import { useNightContext } from "../../context/NightContext/NightContext";

// ----------  COMPONENTS  ----------

import CategoriesCard from "../CategoriesCard/CategoriesCard";



const Categories = () => {

  const { isNight } = useNightContext();

  const [seasonListFetched, setSeasonListFetched] = useState([]);
  const [loading, setLoading] = useState(true);


  // ==========  GET DATA FROM DATABASE  ========== //

  useEffect(() => {
    const db = getFirestore();

    const queryCollection = collection(db, "categories");
    const orderedQueryCollection = query(queryCollection, orderBy("id"));

    getDocs(orderedQueryCollection)
      .then((res) =>
        setSeasonListFetched(
          res.docs.map((cat) => ({ ...cat.data(), id: cat.id }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

  }, []);


  // ==========  RETURN  ========== //

  return (
    <div className="shopContainer">
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
        seasonListFetched.map((mappedSeasons) => (
          <Link to={`/tienda/${mappedSeasons.packUrl}`} key={mappedSeasons.id}>
            <CategoriesCard
              name={mappedSeasons.name}
              className={mappedSeasons.className}
            />
          </Link>
        ))
      )}
    </div>
  );
};

export default Categories;
