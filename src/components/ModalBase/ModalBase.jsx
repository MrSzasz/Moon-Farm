// =========================  STYLES  =========================

import "./ModalBase.scss";

// =========================  LIBRARIES  =========================

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// =========================  CUSTOM IMPORTS  =========================

import { useNightContext } from "../../context/NightContext/NightContext";

// ----------  COMPONENTS  ----------

import FormContainer from "../FormContainer/FormContainer";
import RecipeContainer from "../RecipeContainer/RecipeContainer";



const ModalBase = ({ handleShow, handleClose, show, name, buttonName, recipes, idForKey }) => {

  const { isNight } = useNightContext();


  // ==========  RETURN  ========== //

  return (
    <>
      <Button
        className={`mainButton ${isNight ? "mainButtonNight hoverNight" : ""}`}
        onClick={handleShow}
      >
        {buttonName}
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton />
        <Modal.Body className="pt-1">

          {buttonName === "RECETAS" ? (
            <RecipeContainer recipes={recipes} />
          ) : (
            <FormContainer />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalBase;
