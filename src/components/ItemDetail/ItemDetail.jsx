// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import ChangeButton from "../changeButton/changeButton";
// import Item from "../Item/Item";
// import ItemCount from "../ItemCount/ItemCount";
// import "./ItemDetail.scss";

// const ItemDetail = ({ pack, isNight }) => {
//   const [filteredPickFromPack, setFilteredPickFromPack] = useState([]);
//   const [buttonStatus, setButtonStatus] = useState(false);

//   const { seasonUrl } = useParams();
//   const { packDetail } = useParams();

//   useEffect(() => {
//     setFilteredPickFromPack(
//       pack.filter((filteredBundle) => filteredBundle.detailUrl === packDetail)
//     );
//   });

//   const changeButton = () => {};

//   return (
//     <div className={`infoCard ${isNight && "infoCardNight"}`}>
//       <h2 className="text-uppercase">{packDetail}</h2>
//       <h3 className="mb-3">= Contenido del pack =</h3>
//       <div className="infoContainer">
//         <div className="prodInfo">
//           {filteredPickFromPack.map((mappedData) => (
//             <>
//               <Item
//                 key={mappedData.id}
//                 className={mappedData.className}
//                 url={mappedData.detailUrl}
//                 image1={mappedData.image1}
//                 image2={mappedData.image2}
//                 image3={mappedData.image3}
//                 image4={mappedData.image4}
//                 image5={mappedData.image5}
//                 classForNight={isNight}
//               />
//               <div className="itemListDescription mb-4">
//                 {mappedData.prodName5 ? (
//                   <ul>
//                     <li className="nameLi mb-2">
//                       &gt; {mappedData.prodName1}:
//                     </li>
//                     <p className="mb-4">{mappedData.prodDesc1}</p>
//                     <li className="nameLi mb-2">
//                       &gt; {mappedData.prodName2}:
//                     </li>
//                     <p className="mb-4">{mappedData.prodDesc2}</p>
//                     <li className="nameLi mb-2">
//                       &gt; {mappedData.prodName3}:
//                     </li>
//                     <p className="mb-4">{mappedData.prodDesc3}</p>
//                     <li className="nameLi mb-2">
//                       &gt; {mappedData.prodName4}:
//                     </li>
//                     <p className="mb-4">{mappedData.prodDesc4}</p>
//                     <li className="nameLi mb-2">
//                       &gt; {mappedData.prodName5}:
//                     </li>
//                     <p>{mappedData.prodDesc5}</p>
//                   </ul>
//                 ) : (
//                   <ul>
//                     <li className="nameLi mb-2">
//                       &gt; {mappedData.prodName1}:
//                     </li>
//                     <p className="mb-4">{mappedData.prodDesc1}</p>
//                     <li className="nameLi mb-2">
//                       &gt; {mappedData.prodName2}:
//                     </li>
//                     <p className="mb-4">{mappedData.prodDesc2}</p>
//                     <li className="nameLi mb-2">
//                       &gt; {mappedData.prodName3}:
//                     </li>
//                     <p className="mb-4">{mappedData.prodDesc3}</p>
//                     <li className="nameLi mb-2">
//                       &gt; {mappedData.prodName4}:
//                     </li>
//                     <p className="mb-4">{mappedData.prodDesc4}</p>
//                   </ul>
//                 )}
//                 <hr></hr>
//                 <div className="d-flex flex-column">
//                   <div className="d-flex justify-content-between">
//                     <p className="hoverLine">
//                       &gt; Stock disponible: {mappedData.stock}{" "}
//                     </p>
//                     <p className="hoverLine">
//                       &gt; Precio: ${mappedData.price}
//                     </p>
//                   </div>
//                   <div>
//                     <ChangeButton stockFromObject={mappedData.stock} />
//                   </div>
//                 </div>
//               </div>
//             </>
//           ))}
//         </div>
//         <div className="recipe text-center">
//           <div className="buttonsRecipe text-center">
//             <Link
//               className={`btn mainButton ${isNight && "mainButtonNight"}`}
//               to={`/tienda/${seasonUrl}`}
//             >
//               &lt; VOLVER
//             </Link>
//             <button
//               className={`btn mainButton ${
//                 isNight && "mainButtonNight hoverNight"
//               }`}
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseExample"
//               aria-expanded="false"
//               aria-controls="collapseExample"
//             >
//               RECETAS
//             </button>
//             {/* <button className={`btn mainButton ${isNight&&'mainButtonNight hoverNight'}`}>+ CARRITO</button> */}
//           </div>
//           <div className="collapse" id="collapseExample">
//             <div className="expandedRecipe">
//               <h2 className="text-center">TITULO</h2>
//               <p></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemDetail;






















import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/CartContext";
import ChangeButton from "../changeButton/changeButton";
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss";

const ItemDetail = ({ pack, isNight }) => {
  const [filteredPickFromPack, setFilteredPickFromPack] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(false);


  const {addToCartList} = useCartContext()

  const { seasonUrl } = useParams();
  const { packDetail } = useParams();

  useEffect(() => {
    setFilteredPickFromPack(
      pack.filter((filteredBundle) => filteredBundle.detailUrl === packDetail)
    );
  });

  const changeButton = () => {};

  return (
    <div className={`infoCard ${isNight && "infoCardNight"}`}>
      <h2 className="text-uppercase">{packDetail}</h2>
      <h3 className="mb-3">= Contenido del pack =</h3>
      <div className="infoContainer">
        <div className="prodInfo">
          {filteredPickFromPack.map((mappedData) => (
            <>
              <Item
                key={mappedData.id}
                className={mappedData.className}
                url={mappedData.detailUrl}
                image1={mappedData.image1}
                image2={mappedData.image2}
                image3={mappedData.image3}
                image4={mappedData.image4}
                image5={mappedData.image5}
                classForNight={isNight}
              />
              <div className="itemListDescription mb-4">
                {mappedData.prodName5 ? (
                  <ul>
                    <li className="nameLi mb-2">
                      &gt; {mappedData.prodName1}:
                    </li>
                    <p className="mb-4">{mappedData.prodDesc1}</p>
                    <li className="nameLi mb-2">
                      &gt; {mappedData.prodName2}:
                    </li>
                    <p className="mb-4">{mappedData.prodDesc2}</p>
                    <li className="nameLi mb-2">
                      &gt; {mappedData.prodName3}:
                    </li>
                    <p className="mb-4">{mappedData.prodDesc3}</p>
                    <li className="nameLi mb-2">
                      &gt; {mappedData.prodName4}:
                    </li>
                    <p className="mb-4">{mappedData.prodDesc4}</p>
                    <li className="nameLi mb-2">
                      &gt; {mappedData.prodName5}:
                    </li>
                    <p>{mappedData.prodDesc5}</p>
                  </ul>
                ) : (
                  <ul>
                    <li className="nameLi mb-2">
                      &gt; {mappedData.prodName1}:
                    </li>
                    <p className="mb-4">{mappedData.prodDesc1}</p>
                    <li className="nameLi mb-2">
                      &gt; {mappedData.prodName2}:
                    </li>
                    <p className="mb-4">{mappedData.prodDesc2}</p>
                    <li className="nameLi mb-2">
                      &gt; {mappedData.prodName3}:
                    </li>
                    <p className="mb-4">{mappedData.prodDesc3}</p>
                    <li className="nameLi mb-2">
                      &gt; {mappedData.prodName4}:
                    </li>
                    <p className="mb-4">{mappedData.prodDesc4}</p>
                  </ul>
                )}
                <hr></hr>
                <div className="d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <p className="hoverLine">
                      &gt; Stock disponible: {mappedData.stock}{" "}
                    </p>
                    <p className="hoverLine">
                      &gt; Precio: ${mappedData.price}
                    </p>
                  </div>
                  <div>
                    <ChangeButton stockFromObject={mappedData.stock} selectedPack={mappedData}/>
                    {/* <button onClick={()=>{addToCartList(mappedData),console.log("hola")}}>cartlist</button> */}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="recipe text-center">
          <div className="buttonsRecipe text-center">
            <Link
              className={`btn mainButton ${isNight && "mainButtonNight"}`}
              to={`/tienda/${seasonUrl}`}
            >
              &lt; VOLVER
            </Link>
            <button
              className={`btn mainButton ${
                isNight && "mainButtonNight hoverNight"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              RECETAS
            </button>
            {/* <button className={`btn mainButton ${isNight&&'mainButtonNight hoverNight'}`}>+ CARRITO</button> */}
          </div>
          <div className="collapse" id="collapseExample">
            <div className="expandedRecipe">
              <h2 className="text-center">TITULO</h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
