import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import "./Categories.scss";
import { useNightContext } from "../../context/NightContext/NightContext";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";

const Categories = () => {
  const [seasonListFetched, setSeasonListFetched] = useState([]);
  const [loading, setLoading] = useState(true);

  const { isNight } = useNightContext();

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
