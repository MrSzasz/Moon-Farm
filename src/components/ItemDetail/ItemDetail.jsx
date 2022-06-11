// =========================  STYLES  =========================

import "./ItemDetail.scss";

// =========================  LIBRARIES  =========================

import { useState } from "react";
import { Link, useParams } from "react-router-dom";

// =========================  CUSTOM IMPORTS  =========================

import { useNightContext } from "../../context/NightContext/NightContext";

// ----------  COMPONENTS  ----------

import ModalBase from "../ModalBase/ModalBase";
import ChangeButton from "../changeButton/changeButton";
import Item from "../Item/Item";
import ItemDescription from "../ItemDescription/ItemDescription";



const ItemDetail = ({ pack }) => {

  const { isNight } = useNightContext();

  const { seasonUrl } = useParams();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // ==========  RETURN  ========== //

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
                  <ItemDescription prodName={pack.prodName1} prodDesc={pack.prodDesc1} />
                  <ItemDescription prodName={pack.prodName2} prodDesc={pack.prodDesc2} />
                  <ItemDescription prodName={pack.prodName3} prodDesc={pack.prodDesc3} />
                  <ItemDescription prodName={pack.prodName4} prodDesc={pack.prodDesc4} />
                  <ItemDescription prodName={pack.prodName5} prodDesc={pack.prodDesc5} />
                </ul>
              ) : (
                <ul>
                  <ItemDescription prodName={pack.prodName1} prodDesc={pack.prodDesc1} />
                  <ItemDescription prodName={pack.prodName2} prodDesc={pack.prodDesc2} />
                  <ItemDescription prodName={pack.prodName3} prodDesc={pack.prodDesc3} />
                  <ItemDescription prodName={pack.prodName4} prodDesc={pack.prodDesc4} />
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
              idForKey={pack.id}
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
