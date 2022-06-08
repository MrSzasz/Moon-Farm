import { Link, useParams } from "react-router-dom";
import { useNightContext } from "../../context/NightContext/NightContext";
import "./Item.scss";

function Item({ className, url, image1, image2, image3, image4, image5 }) {
  const { seasonUrl } = useParams();
  const { packDetail } = useParams();

  const { isNight } = useNightContext();

  return (
    <div>
      {/* =========================  ITEM DETAILS  ========================= */}

      {packDetail ? (
        className === "silver" ? (
          <div
            className={`packCardWoH w-50 ${
              (className, isNight ? "packNightWoH" : "")
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
              (className, isNight ? "packNightWoH" : "")
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
        )
      ) : (
        // =========================  ITEM IN LIST =========================

        <Link to={`/tienda/${seasonUrl}/${url}`}>
          {className === "silver" ? (
            <div
              className={`packCard w-50 ${
                (className, isNight ? "packNight" : "")
              }`}
            >
              <div className={`contentCard`}>
                <img className="productN1 imgInList" src={image1}></img>
                <p className="textCardInList">x</p>
                <p>20</p>
              </div>
              <div className="contentCard">
                <img className="productN1 imgInList" src={image2}></img>
                <p>x</p>
                <p>20</p>
              </div>
              <div className="contentCard">
                <img className="productN1 imgInList" src={image3}></img>
                <p>x</p>
                <p>20</p>
              </div>
              <div className="contentCard">
                <img className="productN1 imgInList" src={image4}></img>
                <p>x</p>
                <p>20</p>
              </div>
              <div className="contentCard">
                <img className="productN1 imgInList" src={image5}></img>
                <p>x</p>
                <p>20</p>
              </div>
            </div>
          ) : (
            <div
              className={`packCard w-50 ${
                (className, isNight ? "packNight" : "")
              }`}
            >
              <div className={`contentCard bg-${className}`}>
                <p>ANTERIOR +</p>
              </div>
              <div className="contentCard">
                <img className="productN1 imgInList" src={image1}></img>
                <p>x</p>
                <p>20</p>
              </div>
              <div className="contentCard">
                <img className="productN1 imgInList" src={image2}></img>
                <p>x</p>
                <p>20</p>
              </div>
              <div className="contentCard">
                <img className="productN1 imgInList" src={image3}></img>
                <p>x</p>
                <p>20</p>
              </div>
              <div className="contentCard">
                <img className="productN1 imgInList" src={image4}></img>
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
