import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import "./Categories.scss";
import { getFetchCategories } from "../../helpers/getFetch";

const Categories = ({ classForNight }) => {
  const [seasonListFetched, setSeasonListFetched] = useState([]);
  const [loading, setLoading] = useState(true);

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
            classForNight && "loadingNight"
          }`}
        >
          <span className="loader">
            <span className="loader-inner"></span>
          </span>
          <h2 className="mt-4">CARGANDO...</h2>
        </div>
      ) : (
        seasonListFetched.map((mappedSeasons) => (
          <Link to={`/tienda/${mappedSeasons.packUrl}`}>
            <CategoriesCard
              key={mappedSeasons.id}
              name={mappedSeasons.name}
              className={mappedSeasons.className}
              isNight={classForNight}
            />
          </Link>
        ))
      )}
    </div>
  );
};

export default Categories;
