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
}) {
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

    console.log("el pack pasado es " + className);
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