// import { Link, useParams } from "react-router-dom";
// import "./Item.scss";

// function Item({ className, url, image1, image2, image3, image4, image5 }) {
//   const { seasonUrl } = useParams();
//   const { packDetail } = useParams();

//   return (
//    { (seasonUrl && packDetail ?

//     <Link to={`/tienda/${seasonUrl}/${url}`}>
//       {className === "silver" ? (
//         <div className={`packCard ${className}`}>
//           {/* <div className="contentCard"></div>
//         <div className="contentCard"></div>
//         <div className="contentCard"></div>
//         <div className="contentCard"></div>
//         <div className="contentCard"></div> */}
//           <div className="contentCard">
//             <img src={image1}></img>
//             <p>x 10</p>
//           </div>
//           <div className="contentCard">
//             <img src={image2}></img>
//             <p>x 10</p>
//           </div>
//           <div className="contentCard">
//             <img src={image3}></img>
//             <p>x 10</p>
//           </div>
//           <div className="contentCard">
//             <img src={image4}></img>
//             <p>x 10</p>
//           </div>
//           <div className="contentCard">
//             <img src={image5}></img>
//             <p>x 10</p>
//           </div>
//         </div>
//       ) : (
//         <div className={`packCard ${className}`}>
//           <div className="contentCard">
//             <p>Anterior +</p>
//           </div>
//           <div className="contentCard">
//             <img src={image1}></img>
//             <p>x 10</p>
//           </div>
//           <div className="contentCard">
//             <img src={image2}></img>
//             <p>x 10</p>
//           </div>
//           <div className="contentCard">
//             <img src={image3}></img>
//             <p>x 10</p>
//           </div>
//           <div className="contentCard">
//             <img src={image4}></img>
//             <p>x 10</p>
//           </div>
//         </div>
//       )}
//     </Link>

//     // <Card className="glassCard" style={{ width: "18rem" }}>
//     //   <Card.Img className="w-50 m-auto p-2" variant="top" src={image} />
//     //   <hr></hr>
//     //   <Card.Body>
//     //     <Card.Title className="text-center">{product}</Card.Title>
//     //     <Card.Text className="text-center">
//     //       {`${product} - ID: ${id}`}
//     //       <br></br>${price}
//     //     </Card.Text>
//     //     <Link to={`/detalle/${id}`}>
//     //       <Button variant="primary" className="w-100">
//     //         Detalles
//     //       </Button>
//     //     </Link>
//     //   </Card.Body>
//     // </Card>

// ):(  <Link to={`/tienda/${seasonUrl}/${url}`}>
//     {className === "silver" ? (
//       <div className={`packCard ${className}`}>
//         {/* <div className="contentCard"></div>
//       <div className="contentCard"></div>
//       <div className="contentCard"></div>
//       <div className="contentCard"></div>
//       <div className="contentCard"></div> */}
//         <div className="contentCard">
//           <img src={image1}></img>
//           <p>x 10</p>
//         </div>
//         <div className="contentCard">
//           <img src={image2}></img>
//           <p>x 10</p>
//         </div>
//         <div className="contentCard">
//           <img src={image3}></img>
//           <p>x 10</p>
//         </div>
//         <div className="contentCard">
//           <img src={image4}></img>
//           <p>x 10</p>
//         </div>
//         <div className="contentCard">
//           <img src={image5}></img>
//           <p>x 10</p>
//         </div>
//       </div>
//     ) : (
//       <div className={`packCard ${className}`}>
//         <div className="contentCard">
//           <p>Anterior +</p>
//         </div>
//         <div className="contentCard">
//           <img src={image1}></img>
//           <p>x 10</p>
//         </div>
//         <div className="contentCard">
//           <img src={image2}></img>
//           <p>x 10</p>
//         </div>
//         <div className="contentCard">
//           <img src={image3}></img>
//           <p>x 10</p>
//         </div>
//         <div className="contentCard">
//           <img src={image4}></img>
//           <p>x 10</p>
//         </div>
//       </div>
//     )}
//   </Link>
// )});
// }

// export default Item;

// import { Link, useParams } from "react-router-dom";
// import "./Item.scss";

// function Item({ className, url, image1, image2, image3, image4, image5 }) {
//   const { seasonUrl } = useParams();
//   const { packDetail } = useParams();

// let hola = 'gasgas'

//   return ({ternary ? (true) : (false)})
//    { hola == 'gaslhgas' ?
//  (<Link to={`/tienda/${seasonUrl}/${url}`}>
//       {className === "silver" ? (
//         <div className={`packCard ${className}`}>
//           <div className="contentCard">
//             <img src={image1}></img>
//             <p>x 10</p>
//           </div>
//           <div className="contentCard">
//             <img src={image2}></img>
//             <p>x 10</p>
//           </div>
//           <div className="contentCard">
//             <img src={image3}></img>
//             <p>x 10</p>
//           </div>
//           <div className="contentCard">
//             <img src={image4}></img>
//             <p>x 10</p>
//           </div>
//           <div className="contentCard">
//             <img src={image5}></img>
//             <p>x 10</p>
//           </div>
//         </div>
//       ) : (
//         <div className={`packCard ${className}`}>
//           <div className="contentCard">
//             <p>Anterior +</p>
//           </div>
//           <div className="contentCard">
//             <img src={image1}></img>
//             <p>x 10</p>
//           </div>
//           <div className="contentCard">
//             <img src={image2}></img>
//             <p>x 10</p>
//           </div>
//           <div className="contentCard">
//             <img src={image3}></img>
//             <p>x 10</p>
//           </div>
//           <div className="contentCard">
//             <img src={image4}></img>
//             <p>x 10</p>
//           </div>
//         </div>
//       )}
//     </Link>):(  <Link to={`/tienda/${seasonUrl}/${url}`}>
//     {className === "silver" ? (
//       <div className={`packCard ${className}`}>
//         <div className="contentCard">
//           <img src={image1}></img>
//           <p>x 10</p>
//         </div>
//         <div className="contentCard">
//           <img src={image2}></img>
//           <p>x 10</p>
//         </div>
//         <div className="contentCard">
//           <img src={image3}></img>
//           <p>x 10</p>
//         </div>
//         <div className="contentCard">
//           <img src={image4}></img>
//           <p>x 10</p>
//         </div>
//         <div className="contentCard">
//           <img src={image5}></img>
//           <p>x 10</p>
//         </div>
//       </div>
//     ) : (
//       <div className={`packCard ${className}`}>
//         <div className="contentCard">
//           <p>Anterior +</p>
//         </div>
//         <div className="contentCard">
//           <img src={image1}></img>
//           <p>x 10</p>
//         </div>
//         <div className="contentCard">
//           <img src={image2}></img>
//           <p>x 10</p>
//         </div>
//         <div className="contentCard">
//           <img src={image3}></img>
//           <p>x 10</p>
//         </div>
//         <div className="contentCard">
//           <img src={image4}></img>
//           <p>x 10</p>
//         </div>
//       </div>
//     )}
//   </Link>)
// )
//     }
// export default Item;

// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import "./Item.scss";

// function Item({ url, image1, image2, image3, image4, image5 }) {
//   const { seasonUrl } = useParams();
//   const { packDetail } = useParams();
//   const [classNameTier, setClassNameTier] = useState();

//   // useEffect(() => {
//   //   if (packDetail == "plata") {
//   //     setClassNameTier("silver");
//   //   } else if (packDetail == "oro") {
//   //     setClassNameTier("gold");
//   //   } else {
//   //     setClassNameTier("iridium");
//   //   }
//   // }, [])

//   return (
//     <div>
//       {packDetail ? (
//         packDetail === "silver" ? (
//           <div className={`packCardWoH ${classNameTier}`}>
//             <div className="contentCard">
//               <img src={image1}></img>
//               <p>x 10</p>
//             </div>
//             <div className="contentCard">
//               <img src={image2}></img>
//               <p>x 10</p>
//             </div>
//             <div className="contentCard">
//               <img src={image3}></img>
//               <p>x 10</p>
//             </div>
//             <div className="contentCard">
//               <img src={image4}></img>
//               <p>x 10</p>
//             </div>
//             <div className="contentCard">
//               <img src={image5}></img>
//               <p>x 10</p>
//             </div>
//           </div>
//         ) : (
//           <div className={`packCardWoH ${classNameTier}`}>
//             <div className="contentCard">
//               <p className="text-uppercase">{classNameTier}</p>
//             </div>
//             <div className="contentCard">
//               <img src={image1}></img>
//               <p>x 10</p>
//             </div>
//             <div className="contentCard">
//               <img src={image2}></img>
//               <p>x 10</p>
//             </div>
//             <div className="contentCard">
//               <img src={image3}></img>
//               <p>x 10</p>
//             </div>
//             <div className="contentCard">
//               <img src={image4}></img>
//               <p>x 10</p>
//             </div>
//           </div>
//         )
//       ) : (
//         <Link to={`/tienda/${seasonUrl}/${url}`}>
//           {classNameTier === "silver" ? (
//             <div className={`packCard ${classNameTier}`}>
//               <div className="contentCard">
//                 <img src={image1}></img>
//                 <p>x 10</p>
//               </div>
//               <div className="contentCard">
//                 <img src={image2}></img>
//                 <p>x 10</p>
//               </div>
//               <div className="contentCard">
//                 <img src={image3}></img>
//                 <p>x 10</p>
//               </div>
//               <div className="contentCard">
//                 <img src={image4}></img>
//                 <p>x 10</p>
//               </div>
//               <div className="contentCard">
//                 <img src={image5}></img>
//                 <p>x 10</p>
//               </div>
//             </div>
//           ) : (
//             <div className={`packCard ${classNameTier}`}>
//               <div className="contentCard">
//                 <p>Anterior +</p>
//               </div>
//               <div className="contentCard">
//                 <img src={image1}></img>
//                 <p>x 10</p>
//               </div>
//               <div className="contentCard">
//                 <img src={image2}></img>
//                 <p>x 10</p>
//               </div>
//               <div className="contentCard">
//                 <img src={image3}></img>
//                 <p>x 10</p>
//               </div>
//               <div className="contentCard">
//                 <img src={image4}></img>
//                 <p>x 10</p>
//               </div>
//             </div>
//           )}
//         </Link>
//       )}
//     </div>
//   );
// }
// export default Item;

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Item.scss";

function Item({ className, url, image1, image2, image3, image4, image5 }) {
  const [borderForDetails, setBorderForDetails] = useState();
  const { seasonUrl } = useParams();
  const { packDetail } = useParams();

  useEffect(() => {
    if (packDetail === "plata") {
      setBorderForDetails("silver");
    } else if (packDetail === "oro") {
      setBorderForDetails("gold");
    } else {
      setBorderForDetails("iridium");
    }

    console.log(borderForDetails)
  }, []);

  return (
    <div>
      {packDetail ? (
        borderForDetails === "silver" ? (
          <div className={`packCardWoH ${borderForDetails}`}>
            <div className="contentCard">
              <img src={image1}></img>
              <p>x 10</p>
            </div>
            <div className="contentCard">
              <img src={image2}></img>
              <p>x 10</p>
            </div>
            <div className="contentCard">
              <img src={image3}></img>
              <p>x 10</p>
            </div>
            <div className="contentCard">
              <img src={image4}></img>
              <p>x 10</p>
            </div>
            <div className="contentCard">
              <img src={image5}></img>
              <p>x 10</p>
            </div>
          </div>
        ) : (
          <div className={`packCardWoH ${borderForDetails}`}>
            <div className="contentCard">
              <p>ANTERIOR +</p>
            </div>
            <div className="contentCard">
              <img src={image1}></img>
              <p>x 10</p>
            </div>
            <div className="contentCard">
              <img src={image2}></img>
              <p>x 10</p>
            </div>
            <div className="contentCard">
              <img src={image3}></img>
              <p>x 10</p>
            </div>
            <div className="contentCard">
              <img src={image4}></img>
              <p>x 10</p>
            </div>
          </div>
        )
      ) : (
        <Link to={`/tienda/${seasonUrl}/${url}`}>
          {className === "silver" ? (
            <div className={`packCard ${className}`}>
              <div className="contentCard">
                <img src={image1}></img>
                <p>x 10</p>
              </div>
              <div className="contentCard">
                <img src={image2}></img>
                <p>x 10</p>
              </div>
              <div className="contentCard">
                <img src={image3}></img>
                <p>x 10</p>
              </div>
              <div className="contentCard">
                <img src={image4}></img>
                <p>x 10</p>
              </div>
              <div className="contentCard">
                <img src={image5}></img>
                <p>x 10</p>
              </div>
            </div>
          ) : (
            <div className={`packCard ${className}`}>
              <div className="contentCard">
                <p>ANTERIOR +</p>
              </div>
              <div className="contentCard">
                <img src={image1}></img>
                <p>x 10</p>
              </div>
              <div className="contentCard">
                <img src={image2}></img>
                <p>x 10</p>
              </div>
              <div className="contentCard">
                <img src={image3}></img>
                <p>x 10</p>
              </div>
              <div className="contentCard">
                <img src={image4}></img>
                <p>x 10</p>
              </div>
            </div>
          )}
        </Link>
      )}
    </div>
  );
}
export default Item;
