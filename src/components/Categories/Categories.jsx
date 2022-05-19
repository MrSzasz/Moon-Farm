import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import "./Categories.scss";
import { getFetchCategories } from "../../helpers/getFetch";

// let seasonList = [
//   {
//     name: "PRIMAVERA",
//     id: "S1",
//     image: "",
//     className: "spring",
//     packUrl: "primavera",
//   },
//   {
//     name: "VERANO",
//     id: "S2",
//     image: "",
//     className: "summer",
//     packUrl: "verano",
//   },
//   { name: "OTOÑO", id: "S3", image: "", className: "autumn", packUrl: "otoño" },
//   {
//     name: "ESPECIALES",
//     id: "S4",
//     image: "",
//     className: "specials",
//     packUrl: "especiales",
//   },
// ];

// const getFetch = new Promise((res) => {
//   setTimeout(() => {
//     res(seasonList);
//   }, 2000);
// });

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
          <span class="loader">
            <span class="loader-inner"></span>
          </span>
          <h2 className="mt-4">LOADING...</h2>
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
