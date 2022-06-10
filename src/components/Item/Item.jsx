// =========================  STYLES  =========================

import "./Item.scss";

// =========================  LIBRARIES  =========================

import { Link, useParams } from "react-router-dom";

// =========================  CUSTOM IMPORTS  =========================

import { useNightContext } from "../../context/NightContext/NightContext";
import ContentCard from "../ContentCard/ContentCard";



function Item({ className, url, image1, image2, image3, image4, image5 }) {

  const { isNight } = useNightContext();

  const { seasonUrl } = useParams();
  const { packDetail } = useParams();


  // ==========  RETURN  ========== //

  return (
    <div>

      {/* =========================  ITEM DETAILS  ========================= */}

      {packDetail ? (
        className === "silver" ? (
          <div
            className={`packCardWoH w-50 ${(className, isNight ? "packNightWoH" : "")
              }`}
          >
            <ContentCard img={image1} />
            <ContentCard img={image2} />
            <ContentCard img={image3} />
            <ContentCard img={image4} />
            <ContentCard img={image5} />
          </div>
        ) : (
          <div
            className={`packCardWoH w-50 ${(className, isNight ? "packNightWoH" : "")
              }`}
          >
            <div className={`contentCard bg-${className}`}>
              <p>ANTERIOR +</p>
            </div>
            <ContentCard img={image1} />
            <ContentCard img={image2} />
            <ContentCard img={image3} />
            <ContentCard img={image4} />
          </div>
        )
      ) : (

        // =========================  ITEM IN LIST =========================

        <Link to={`/tienda/${seasonUrl}/${url}`}>
          {className === "silver" ? (
            <div
              className={`packCard w-50 ${(className, isNight ? "packNight" : "")
                }`}
            >
              <ContentCard thisClass="imgInList" img={image1} />
              <ContentCard thisClass="imgInList" img={image2} />
              <ContentCard thisClass="imgInList" img={image3} />
              <ContentCard thisClass="imgInList" img={image4} />
              <ContentCard thisClass="imgInList" img={image5} />
            </div>
          ) : (
            <div
              className={`packCard w-50 ${(className, isNight ? "packNight" : "")
                }`}
            >
              <div className={`contentCard bg-${className}`}>
                <p>ANTERIOR +</p>
              </div>
              <ContentCard thisClass="imgInList" img={image1} />
              <ContentCard thisClass="imgInList" img={image2} />
              <ContentCard thisClass="imgInList" img={image3} />
              <ContentCard thisClass="imgInList" img={image4} />
            </div>
          )}
        </Link>
      )}
    </div>
  );
}
export default Item;
