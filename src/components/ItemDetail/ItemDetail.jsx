// import { useEffect, useState, useContext } from "react";
// import { Link, useParams } from "react-router-dom";
// import ChangeButton from "../changeButton/changeButton";
// import Item from "../Item/Item";
// import "./ItemDetail.scss";

// const ItemDetail = ({ pack, isNight }) => {
//   const [filteredPickFromPack, setFilteredPickFromPack] = useState([]);

//   const { seasonUrl } = useParams();
//   const { packDetail } = useParams();

//   // const {}
//   useEffect(() => {
//     setFilteredPickFromPack(
//       pack.filter((filteredBundle) => filteredBundle.detailUrl === packDetail)
//     );
//   });

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
//                       &gt; Stock disponible: {mappedData.stock}
//                     </p>
//                     <p className="hoverLine">
//                       &gt; Precio: ${mappedData.price}
//                     </p>
//                   </div>
//                   <div>
//                     <ChangeButton stockFromObject={mappedData.stock} selectedItem={mappedData}/>
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
import {useContext} from "react"
import { Link, useParams } from "react-router-dom";
import ChangeButton from "../changeButton/changeButton";
import Item from "../Item/Item";
import "./ItemDetail.scss";
import { CartContext } from "../../context/CartContext/CartContext";


const ItemDetail = ({ pack, isNight }) => {

  const { cartList, addToCart } = useContext(CartContext);

// console.log(addToCart)

  function changeOnClick(counter){
    // setShowButton(true);
    // console.log('this is'+cartList)
    // addToCart({pack, cantidad:counter});
    // addToCart({cantidad:counter});
    // alert(pack);
    // alert(counter)
    console.log('cartlist es: '+cartList)
  };

  // console.log('this is'+cartList)

  const { seasonUrl } = useParams();

  return (
    <div className={`infoCard ${isNight && "infoCardNight"}`}>
      <h2 className="text-uppercase">{pack.detailUrl}</h2>
      <h3 className="mb-3">= Contenido del pack =</h3>
      <div className="infoContainer">
        <div className="prodInfo">
              <Item
                key={pack.id}
                className={pack.className}
                url={pack.detailUrl}
                image1={pack.image1}
                image2={pack.image2}
                image3={pack.image3}
                image4={pack.image4}
                image5={pack.image5}
                classForNight={isNight}
              />
              <div className="itemListDescription mb-4">
                {pack.prodName5 ? (
                  <ul>
                    <li className="nameLi mb-2">
                      &gt; {pack.prodName1}:
                    </li>
                    <p className="mb-4">{pack.prodDesc1}</p>
                    <li className="nameLi mb-2">
                      &gt; {pack.prodName2}:
                    </li>
                    <p className="mb-4">{pack.prodDesc2}</p>
                    <li className="nameLi mb-2">
                      &gt; {pack.prodName3}:
                    </li>
                    <p className="mb-4">{pack.prodDesc3}</p>
                    <li className="nameLi mb-2">
                      &gt; {pack.prodName4}:
                    </li>
                    <p className="mb-4">{pack.prodDesc4}</p>
                    <li className="nameLi mb-2">
                      &gt; {pack.prodName5}:
                    </li>
                    <p>{pack.prodDesc5}</p>
                  </ul>
                ) : (
                  <ul>
                    <li className="nameLi mb-2">
                      &gt; {pack.prodName1}:
                    </li>
                    <p className="mb-4">{pack.prodDesc1}</p>
                    <li className="nameLi mb-2">
                      &gt; {pack.prodName2}:
                    </li>
                    <p className="mb-4">{pack.prodDesc2}</p>
                    <li className="nameLi mb-2">
                      &gt; {pack.prodName3}:
                    </li>
                    <p className="mb-4">{pack.prodDesc3}</p>
                    <li className="nameLi mb-2">
                      &gt; {pack.prodName4}:
                    </li>
                    <p className="mb-4">{pack.prodDesc4}</p>
                  </ul>
                )}
                <hr></hr>
                <div className="d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <p className="hoverLine">
                      &gt; Stock disponible: {pack.stock}
                    </p>
                    <p className="hoverLine">
                      &gt; Precio: ${pack.price}
                    </p>
                  </div>
                  <div>
                    <ChangeButton stockFromObject={pack.stock} selectedItem={pack}/>
      {/* <button onClick={()=>changeOnClick(4)}>here</button> */}
                    
                  </div>
                </div>
              </div>
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
