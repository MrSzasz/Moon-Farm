import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNightContext } from "../../context/NightContext/NightContext";
import "./ModalBase.scss";
import FormContainer from "../FormContainer/FormContainer";
import Recipes from "../Recipes/Recipes";

const ModalBase = ({
  handleShow,
  handleClose,
  show,
  name,
  buttonName,
  recipes,
}) => {
  const { isNight } = useNightContext();
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
        <Modal.Body>
          {/* {buttonName==="RECETAS"?(<Recipes/>):<FormContainer />} */}
          <h2 className="text-center">RECETAS</h2>
          {buttonName === "RECETAS" ? (
            //   recipes.forEach(element) => {
            //   <Recipes recipe={element.recipes}/>
            // }
            recipes.map((element) => (
              //   // <Recipes recipeName={element.recipeName} recipeIng={element.recipeIng} recipeSteps={element.recipeSteps}/>
              // })

              // <div>
              //   <h2 className="text-center">RECETAS</h2>
              //   <img src="https://imgur.com/JfwEdwn" alt="" />
              //   <h4 className="text-center">= {element.recipeName} =</h4>
              //   <br />
              //   <p>{element.recipeIng}</p> <br />
              //   <br />
              //   <p>{element.recipeSteps} </p>
              //   <br />
              //   <hr />
              // </div>

              <>
                <Recipes
                  recipeName={element.recipeName}
                  recipeIng={element.recipeIng}
                  recipeSteps={element.recipeSteps}
                />
              </>
            ))
          ) : (
            <FormContainer />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalBase;
