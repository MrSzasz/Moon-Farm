import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.scss";

let packList = [
  { className: "silver", detailUrl: "plata" },
  { className: "gold", detailUrl: "oro" },
  { className: "iridium", detailUrl: "iridio" },
];

const getFetch = new Promise((res) => {
  setTimeout(() => {
    res(packList);
  }, 2000);
});

const ItemListContainer = ({ detailUrl }) => {
  const [packsFromList, setPacksFromList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
      .then((res) => setPacksFromList(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const { seasonUrl } = useParams();

  return (
    <div className="d-flex flex-wrap w-100 justify-content-center align-items-center">
      {loading ? (
        <h2 className="p-3">Cargando...</h2>
      ) : (
        packsFromList.map((mappedPack) => (
          <div className="mainPacks">
            <Link
              className="linkToDetails"
              to={`/tienda/${seasonUrl}/${mappedPack.detailUrl}`}
            >
              <ItemList packs={packsFromList} />
            </Link>{console.log("holi"+mappedPack.detailUrl)}
            <Link class="btn mainButton" to="/tienda">
              &lt; VOLVER
            </Link>
          </div>
        ))
        // <div className="mainPacks">
        //   <Link
        //     className="linkToDetails"
        //     to={`/tienda/${seasonUrl}/${packsFromList.detailUrl}`}
        //   >
        //     <ItemList packs={packsFromList} />
        //   </Link>
        //   <Link class="btn mainButton" to="/tienda">
        //     &lt; VOLVER
        //   </Link>
        // </div>
      )}
    </div>
  );
};

export default ItemListContainer;

{/* <div className="shopContainer">
  {seasonListFetched.map((mappedSeasons) => (
    <Link to={`/tienda/${mappedSeasons.packUrl}`}>
      <CategoriesCard
        key={mappedSeasons.id}
        name={mappedSeasons.name}
        className={mappedSeasons.className}
      />
    </Link>
  ))}
</div>; */}

// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import ItemList from "../ItemList/ItemList";
// import "./ItemListContainer.scss";

// let packList = [
//   { className: "silver", detailUrl: "plata" },
//   { className: "gold", detailUrl: "oro" },
//   { className: "iridium", detailUrl: "iridio" },
// ];

// const getFetch = new Promise((res) => {
//   setTimeout(() => {
//     res(packList);
//   }, 2000);
// });

// const ItemListContainer = ({ detailUrl }) => {
//   const [packsFromList, setPacksFromList] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getFetch
//       .then((res) => setPacksFromList(res))
//       .catch((err) => console.log(err))
//       .finally(() => setLoading(false));
//   }, []);

//   const { seasonUrl } = useParams();

//   return (
//     <div className="d-flex flex-wrap w-100 justify-content-center align-items-center">
//       {loading ? (
//         <h2 className="p-3">Cargando...</h2>
//       ) : (
//         <div className="mainPacks">
//           <Link
//             className="linkToDetails"
//             to={`/tienda/${seasonUrl}/${packsFromList.detailUrl}`}
//           >
//             <ItemList packs={packsFromList} />
//           </Link>
//           <Link class="btn mainButton" to="/tienda">
//             &lt; VOLVER
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ItemListContainer;
