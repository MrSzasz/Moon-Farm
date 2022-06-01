import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNightContext } from "../../context/NightContext/NightContext";
import "./Item.scss";

function Item({
  className,
  url = "https://i.imgur.com/KFivjtP.png",
  image1,
  image2 = "https://i.imgur.com/KFivjtP.png",
  image3 = "https://i.imgur.com/KFivjtP.png",
  image4 = "https://i.imgur.com/KFivjtP.png",
  image5 = "https://i.imgur.com/KFivjtP.png",
}) {
  const [borderForDetails, setBorderForDetails] = useState();
  const { seasonUrl } = useParams();
  const { packDetail } = useParams();

  const { isNight } = useNightContext();

  useEffect(() => {
    if (packDetail === "plata") {
      setBorderForDetails("silver");
    } else if (packDetail === "oro") {
      setBorderForDetails("gold");
    } else {
      setBorderForDetails("iridium");
    }
  }, []);

  return (
    <div>
      {/* =========================  ITEM DETAILS  ========================= */}

      {packDetail ? (
        borderForDetails === "silver" ? (
          <div
            className={`packCardWoH w-50 ${
              (borderForDetails, (isNight? "packNightWoH":""))
            }`}
          >
            <div className="contentCard">
              <img className="productN1" src={image1}></img>
              <p>x</p>
              <p>20</p>
            </div>
            <div className="contentCard">
              <img className="productN1" src={image2}></img>
              <p>x</p>
              <p>20</p>
            </div>
            <div className="contentCard">
              <img className="productN1" src={image3}></img>
              <p>x</p>
              <p>20</p>
            </div>
            <div className="contentCard">
              <img className="productN1" src={image4}></img>
              <p>x</p>
              <p>20</p>
            </div>
            <div className="contentCard">
              <img className="productN1" src={image5}></img>
              <p>x</p>
              <p>20</p>
            </div>
          </div>
        ) : (
          <div
            className={`packCardWoH w-50 ${
              (borderForDetails, (isNight? "packNightWoH":""))
            }`}
          >
            <div className={`contentCard bg-${borderForDetails}`}>
              <p>ANTERIOR +</p>
            </div>
            <div className="contentCard">
              <img className="productN1" src={image1}></img>
              <p>x</p>
              <p>20</p>
            </div>
            <div className="contentCard">
              <img className="productN1" src={image2}></img>
              <p>x</p>
              <p>20</p>
            </div>
            <div className="contentCard">
              <img className="productN1" src={image3}></img>
              <p>x</p>
              <p>20</p>
            </div>
            <div className="contentCard">
              <img className="productN1" src={image4}></img>
              <p>x</p>
              <p>20</p>
            </div>
          </div>
        )
      ) : (
        // =========================  ITEM IN LIST =========================

        <Link to={`/tienda/${seasonUrl}/${url}`}>
          {className === "silver" ? (
            <div
              className={`packCard w-50 ${
                (className, (isNight? "packNight":""))
              }`}
            >
              <div className={`contentCard`}>
                <img className="productN1" src={image1}></img>
                <p>x</p>
                <p>20</p>
              </div>
              <div className="contentCard">
                <img className="productN1" src={image2}></img>
                <p>x</p>
                <p>20</p>
              </div>
              <div className="contentCard">
                <img className="productN1" src={image3}></img>
                <p>x</p>
                <p>20</p>
              </div>
              <div className="contentCard">
                <img className="productN1" src={image4}></img>
                <p>x</p>
                <p>20</p>
              </div>
              <div className="contentCard">
                <img className="productN1" src={image5}></img>
                <p>x</p>
                <p>20</p>
              </div>
            </div>
          ) : (
            <div
              className={`packCard w-50 ${
                (className, (isNight? "packNight":""))
              }`}
            >
              <div className={`contentCard bg-${className}`}>
                <p>ANTERIOR +</p>
              </div>
              <div className="contentCard">
                <img className="productN1" src={image1}></img>
                <p>x</p>
                <p>20</p>
              </div>
              <div className="contentCard">
                <img className="productN1" src={image2}></img>
                <p>x</p>
                <p>20</p>
              </div>
              <div className="contentCard">
                <img className="productN1" src={image3}></img>
                <p>x</p>
                <p>20</p>
              </div>
              <div className="contentCard">
                <img className="productN1" src={image4}></img>
                <p>x</p>
                <p>20</p>
              </div>
            </div>
          )}
        </Link>
      )}
    </div>
  );
}
export default Item;
