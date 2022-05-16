import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.scss";

// let packList = [
//   {
//     id: "B1",
//     className: "silver",
//     detailUrl: "plata",
//     image1: "",
//     image2: "",
//     image3: "",
//     image4: "",
//   },
//   {
//     id: "B2",
//     className: "gold",
//     detailUrl: "oro",
//     image1: "",
//     image2: "",
//     image3: "",
//     image4: "",
//     image5: "",
//   },
//   {
//     id: "B3",
//     className: "iridium",
//     detailUrl: "iridio",
//     image1: "",
//     image2: "",
//     image3: "",
//     image4: "",
//     image5: "",
//   },
// ];

let packList = [
  {
    season: "primavera",
    id: "B1",
    className: "silver",
    detailUrl: "plata",
    image1: "https://i.imgur.com/kDq8PJi.png",
    quantity1: 10,
    image2: "https://i.imgur.com/k2LWKUl.png",
    quantity2: 10,
    image3: "https://i.imgur.com/xTsjp3F.png",
    quantity3: 10,
    image4: "https://i.imgur.com/2c3oyBa.png",
    quantity4: 10,
    image5: "https://i.imgur.com/tk1P6aa.png",
    quantity5: 10,
  },
  {
    season: "primavera",
    id: "B2",
    className: "gold",
    detailUrl: "oro",
    image1: "https://i.imgur.com/HKgKklR.png",
    quantity1: 10,
    image2: "https://i.imgur.com/ZvyGDjN.png",
    quantity2: 10,
    image3: "https://i.imgur.com/BUvGdbA.png",
    quantity3: 10,
    image4: "https://i.imgur.com/74hW90n.png",
    quantity4: 10,
  },
  {
    season: "primavera",
    id: "B3",
    className: "iridium",
    detailUrl: "iridio",
    image1: "https://i.imgur.com/sB2Xpzt.png",
    quantity1: 10,
    image2: "https://i.imgur.com/8HxLxel.png",
    quantity2: 10,
    image3: "https://i.imgur.com/GCt2WZh.png",
    quantity3: 10,
    image4: "https://i.imgur.com/TcBuPzc.png",
    quantity4: 10,
  },
  {
    season: "verano",
    id: "B1",
    className: "silver",
    detailUrl: "plata",
    image1: "https://i.imgur.com/9InoqAj.png",
    quantity1: 10,
    image2: "https://i.imgur.com/ZFPwMhA.png",
    quantity2: 10,
    image3: "https://i.imgur.com/Rl2JLgq.png",
    quantity3: 10,
    image4: "https://i.imgur.com/YNNrc3P.png",
    quantity4: 10,
    image5: "https://i.imgur.com/pSBkrXu.png",
    quantity5: 10,
  },
  {
    season: "verano",
    id: "B2",
    className: "gold",
    detailUrl: "oro",
    image1: "https://i.imgur.com/4mcKop6.png",
    quantity1: 10,
    image2: "https://i.imgur.com/jxqBKlm.png",
    quantity2: 10,
    image3: "https://i.imgur.com/vhMn4ry.png",
    quantity3: 10,
    image4: "https://i.imgur.com/e4lcjs4.png",
    quantity4: 10,
  },
  {
    season: "verano",
    id: "B3",
    className: "iridium",
    detailUrl: "iridio",
    image1: "https://i.imgur.com/lREVwys.png",
    quantity1: 10,
    image2: "https://i.imgur.com/oFKLcDR.png",
    quantity2: 10,
    image3: "https://i.imgur.com/6gpNdHH.png",
    quantity3: 10,
    image4: "https://i.imgur.com/afgRwSb.png",
    quantity4: 10,
  },
  {
    season: "otoño",
    id: "B1",
    className: "silver",
    detailUrl: "plata",
    image1: "https://i.imgur.com/p5Et1RE.png",
    quantity1: 10,
    image2: "https://i.imgur.com/KFivjtP.png",
    quantity2: 10,
    image3: "https://i.imgur.com/q6JA44w.png",
    quantity3: 10,
    image4: "https://i.imgur.com/KPOsupB.png",
    quantity4: 10,
    image5: "https://i.imgur.com/oSLCEbo.png",
    quantity5: 10,
  },
  {
    season: "otoño",
    id: "B2",
    className: "gold",
    detailUrl: "oro",
    image1: "https://i.imgur.com/xmXyxxT.png",
    quantity1: 10,
    image2: "https://i.imgur.com/UIY81fV.png",
    quantity2: 10,
    image3: "https://i.imgur.com/a7R4cld.png",
    quantity3: 10,
    image4: "https://i.imgur.com/YxG5FzY.png",
    quantity4: 10,
  },
  {
    season: "otoño",
    id: "B3",
    className: "iridium",
    detailUrl: "iridio",
    image1: "https://i.imgur.com/zUqbusq.png",
    quantity1: 10,
    image2: "https://i.imgur.com/KD2ARie.png",
    quantity2: 10,
    image3: "https://i.imgur.com/Sg4uh9S.png",
    quantity3: 10,
    image4: "https://i.imgur.com/ty8bZ7t.png",
    quantity4: 10,
  },
  {
    season: "especiales",
    id: "B1",
    className: "silver",
    detailUrl: "plata",
    image1: "https://i.imgur.com/375s7Vs.png",
    quantity1: 10,
    image2: "https://i.imgur.com/hfuHQiV.png",
    quantity2: 10,
    image3: "https://i.imgur.com/OkPGOVS.png",
    quantity3: 10,
    image4: "https://i.imgur.com/DU4SjMU.png",
    quantity4: 10,
    image5: "https://i.imgur.com/jNkPBL7.png",
    quantity5: 10,
  },
  {
    season: "especiales",
    id: "B2",
    className: "gold",
    detailUrl: "oro",
    image1: "https://i.imgur.com/rxssQeQ.png",
    quantity1: 10,
    image2: "https://i.imgur.com/PlER97J.png",
    quantity2: 10,
    image3: "https://i.imgur.com/Y7JJlj5.png",
    quantity3: 10,
    image4: "https://i.imgur.com/6V46Bp1.png",
    quantity4: 10,
  },
  {
    season: "especiales",
    id: "B3",
    className: "iridium",
    detailUrl: "iridio",
    image1: "https://i.imgur.com/g9IuOCo.png",
    quantity1: 10,
    image2: "https://i.imgur.com/UFamyib.png",
    quantity2: 10,
    image3: "https://i.imgur.com/2Ypt1jn.png",
    quantity3: 10,
    image4: "https://i.imgur.com/c9XTkbb.png",
    quantity4: 10,
  },
];

const getFetch = new Promise((res) => {
  setTimeout(() => {
    res(packList);
  }, 2000);
});

const ItemListContainer = () => {
  const [packsFromList, setPacksFromList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { seasonUrl } = useParams();

  useEffect(() => {
    getFetch
      .then((res) => setPacksFromList(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setFilteredList(
      packsFromList.filter(seasonPack => seasonPack.season == seasonUrl )
    );
  }, );


  return (
    <div className="d-flex flex-wrap w-100 justify-content-center align-items-center">
      {loading ? (
        <h2 className="p-3">Cargando...</h2>
      ) : (
        // <div className="shopContainer">
        //       {packsFromList.map((mappedSeasons) => (
        //         <Link key={mappedSeasons.id} to={`/tienda/${mappedSeasons.packUrl}`}>
        //         <ItemList
        //           packs={packsFromList}
        //         />
        //         </Link>
        //       ))}
        //     </div>

        // packsFromList.map((mappedPack) => (
        //   <div className="mainPacks">
        //     <Link
        //       className="linkToDetails"
        //       to={`/tienda/${seasonUrl}/${mappedPack.detailUrl}`}
        //     >
        //       <ItemList packs={packsFromList} />
        //     </Link>
        //     <Link className="btn mainButton" to="/tienda">
        //       &lt; VOLVER
        //     </Link>
        //   </div>
        // ))

        <div className="mainPacks">
          <h2>{seasonUrl.toUpperCase()}</h2>
          <ItemList packs={filteredList} />
          <Link className="btn mainButton" to="/tienda">
            &lt; VOLVER
          </Link>
        </div>

        // <div className="mainPacks">
        //   <Link
        //     className="linkToDetails"
        //     to={`/tienda/${seasonUrl}/${holi}`}
        //   >
        //     <ItemList packs={packsFromList} />
        //   </Link>
        //   <Link className="btn mainButton" to="/tienda">
        //     &lt; VOLVER
        //   </Link>
        // </div>
      )}
    </div>
  );
};

export default ItemListContainer;

{
  /* <div className="shopContainer">
  {seasonListFetched.map((mappedSeasons) => (
    <Link to={`/tienda/${mappedSeasons.packUrl}`}>
      <CategoriesCard
        key={mappedSeasons.id}
        name={mappedSeasons.name}
        className={mappedSeasons.className}
      />
    </Link>
  ))}
</div>; */
}

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
//           <Link className="btn mainButton" to="/tienda">
//             &lt; VOLVER
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ItemListContainer;
