import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Item.scss";

function Item({
  className,
  url = "https://i.imgur.com/KFivjtP.png",
  image1,
  image2 = "https://i.imgur.com/KFivjtP.png",
  image3 = "https://i.imgur.com/KFivjtP.png",
  image4 = "https://i.imgur.com/KFivjtP.png",
  image5 = "https://i.imgur.com/KFivjtP.png",
  classForNight
}) {
  const [borderForDetails, setBorderForDetails] = useState();
  const [isNight, setIsNight] = useState();
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
  }, []);

  
  useEffect(() => {
    classForNight&&
    setIsNight(
      'nightContainer'
    )
  },[])


  return (
    <div>

      {/* =========================  ITEM DETAILS  ========================= */}

      {packDetail ? (
        borderForDetails === "silver" ? (
          <div className={`packCardWoH ${borderForDetails, isNight&&'packNightWoH'}`}>
            <div className="contentCard">
              <img className="productN1" src={image1}></img>
              <p>x 20</p>
            </div>
            <div className="contentCard">
              <img className="productN1" src={image2}></img>
              <p>x 20</p>
            </div>
            <div className="contentCard">
              <img className="productN1" src={image3}></img>
              <p>x 20</p>
            </div>
            <div className="contentCard">
              <img className="productN1" src={image4}></img>
              <p>x 20</p>
            </div>
            <div className="contentCard">
              <img className="productN1" src={image5}></img>
              <p>x 20</p>
            </div>
          </div>
        ) : (          
          <div className={`packCardWoH ${borderForDetails, isNight&&'packNightWoH'}`}>
            <div className={`contentCard bg-${borderForDetails}`}>
              <p>ANTERIOR +</p>
            </div>
            <div className="contentCard">
              <img className="productN1" src={image1}></img>
              <p>x 20</p>
            </div>
            <div className="contentCard">
              <img className="productN1" src={image2}></img>
              <p>x 20</p>
            </div>
            <div className="contentCard">
              <img className="productN1" src={image3}></img>
              <p>x 20</p>
            </div>
            <div className="contentCard">
              <img className="productN1" src={image4}></img>
              <p>x 20</p>
            </div>
          </div>
        )
      ) : (

        // =========================  ITEM IN LIST =========================

        <Link to={`/tienda/${seasonUrl}/${url}`}>
          {className === "silver" ? (
            <div className={`packCard ${className, classForNight&&'packNight'}`}>
              <div className={`contentCard`}>
                <img className="productN1" src={image1}></img>
                <p>x 20</p>
              </div>
              <div className="contentCard">
                <img className="productN1" src={image2}></img>
                <p>x 20</p>
              </div>
              <div className="contentCard">
                <img className="productN1" src={image3}></img>
                <p>x 20</p>
              </div>
              <div className="contentCard">
                <img className="productN1" src={image4}></img>
                <p>x 20</p>
              </div>
              <div className="contentCard">
                <img className="productN1" src={image5}></img>
                <p>x 20</p>
              </div>
            </div>
          ) : (
            <div className={`packCard ${className, classForNight&&'packNight'}`}>
              <div className={`contentCard bg-${className}`}>
                <p>ANTERIOR +</p>
              </div>
              <div className="contentCard">
                <img className="productN1" src={image1}></img>
                <p>x 20</p>
              </div>
              <div className="contentCard">
                <img className="productN1" src={image2}></img>
                <p>x 20</p>
              </div>
              <div className="contentCard">
                <img className="productN1" src={image3}></img>
                <p>x 20</p>
              </div>
              <div className="contentCard">
                <img className="productN1" src={image4}></img>
                <p>x 20</p>
              </div>
            </div>
          )}
        </Link>
      )}
    </div>
  );
}
export default Item;