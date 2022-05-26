import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import "./Categories.scss";
import { getFetchCategories } from "../../helpers/getFetch";
import { useNightContext } from "../../context/NightContext/NightContext";

const Categories = () => {
  const [seasonListFetched, setSeasonListFetched] = useState([]);
  const [loading, setLoading] = useState(true);

  const {isNight} = useNightContext();

  useEffect(() => {
    getFetchCategories()
      .then((res) => setSeasonListFetched(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="shopContainer">
      {loading ? (
        <div
          className={`text-center loadingDiv ${
            isNight?"loadingNight":undefined
          }`}
        >
          <span className="loader">
            <span className="loader-inner"></span>
          </span>
          <h2 className="mt-4">LOADING...</h2>
        </div>
      ) : (
        seasonListFetched.map((mappedSeasons) => (
          <Link to={`/tienda/${mappedSeasons.packUrl}`} key={mappedSeasons.seasonPackId}>
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
