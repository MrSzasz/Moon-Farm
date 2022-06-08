import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNightContext } from "../../context/NightContext/NightContext";
import ChangeButton from "../changeButton/changeButton";
import Item from "../Item/Item";
import ModalBase from "../ModalBase/ModalBase";
import "./ItemDetail.scss";

const ItemDetail = ({ pack }) => {
  const { isNight } = useNightContext();

  const { seasonUrl } = useParams();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={`infoCard ${isNight ? "infoCardNight" : ""}`}>
      <h2 className="text-uppercase text-center">{`${seasonUrl}, Bundle ${pack.detailUrl}`}</h2>
      <h3 className="mb-3 text-center">= Contenido del pack =</h3>
      <div className="infoContainer">
        <div className="prodInfo">
          <div>
            <Item
              className={pack.className}
              url={pack.detailUrl}
              image1={pack.image1}
              image2={pack.image2}
              image3={pack.image3}
              image4={pack.image4}
              image5={pack.image5}
            />
            <div className="itemListDescription my-4">
              {pack.prodName5 ? (
                <ul>
                  <li className="nameLi mb-2">&gt; {pack.prodName1}:</li>
                  <p className="mb-4">{pack.prodDesc1}</p>
                  <li className="nameLi mb-2">&gt; {pack.prodName2}:</li>
                  <p className="mb-4">{pack.prodDesc2}</p>
                  <li className="nameLi mb-2">&gt; {pack.prodName3}:</li>
                  <p className="mb-4">{pack.prodDesc3}</p>
                  <li className="nameLi mb-2">&gt; {pack.prodName4}:</li>
                  <p className="mb-4">{pack.prodDesc4}</p>
                  <li className="nameLi mb-2">&gt; {pack.prodName5}:</li>
                  <p>{pack.prodDesc5}</p>
                </ul>
              ) : (
                <ul>
                  <li className="nameLi mb-2">&gt; {pack.prodName1}:</li>
                  <p className="mb-4">{pack.prodDesc1}</p>
                  <li className="nameLi mb-2">&gt; {pack.prodName2}:</li>
                  <p className="mb-4">{pack.prodDesc2}</p>
                  <li className="nameLi mb-2">&gt; {pack.prodName3}:</li>
                  <p className="mb-4">{pack.prodDesc3}</p>
                  <li className="nameLi mb-2">&gt; {pack.prodName4}:</li>
                  <p className="mb-4">{pack.prodDesc4}</p>
                </ul>
              )}
              <hr></hr>
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-between">
                  <p className="hoverLine">
                    &gt; Stock disponible: {pack.stock}{" "}
                  </p>
                  <p className="hoverLine">&gt; Precio: ${pack.price}</p>
                </div>
                <div>
                  <ChangeButton
                    stockFromObject={pack.stock}
                    selectedPack={pack}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recipe text-center">
          <div className="buttonsRecipe text-center">
            <Link
              className={`btn mainButton ${isNight ? "mainButtonNight" : ""}`}
              to={`/tienda/${seasonUrl}`}
            >
              &lt; VOLVER
            </Link>
            <ModalBase
              show={show}
              handleClose={handleClose}
              handleShow={handleShow}
              name={pack.seasonUrl}
              recipes={pack.recipes}
              buttonName="RECETAS"
            />
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
