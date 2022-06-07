import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNightContext } from "../../context/NightContext/NightContext";
import "./ModalBase.scss";
import FormContainer from "../FormContainer/FormContainer";

const ModalBase = ({ handleShow, handleClose, show, name, buttonName }) => {
  const { isNight } = useNightContext();

  return (
    <>
      <Button
        className={`mainButton ${
          isNight ? "mainButtonNight hoverNight" : ""
        }`}
        onClick={handleShow}
      >
        {buttonName}
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton />
        <Modal.Body>
        <FormContainer />
        </Modal.Body>
        
      </Modal>
    </>
  );
};

export default ModalBase;
