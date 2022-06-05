import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNightContext } from "../../context/NightContext/NightContext";
import "./ModalBase.scss";
import FormContainer from "../FormContainer/FormContainer";

const ModalBase = ({ handleShow, handleClose, show, name, buttonName }) => {
  const { isNight } = useNightContext();

  return (
    <>
      {/* <Button
        className={`btn mainButton ${
          isNight ? "mainButtonNight hoverNight" : ""
        }`}
        onClick={handleShow}
      >
        RECETAS
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton />
        <Modal.Body>
          <h2></h2>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem cumque excepturi, quae rem totam voluptatem vel veniam consequatur amet illum non architecto sequi, labore fugit asperiores ex culpa similique facilis soluta laborum dolore doloremque cupiditate necessitatibus voluptatum. Vel quos nobis, laboriosam reiciendis eum nihil velit libero ex assumenda dolorem totam alias, consequuntur excepturi! Sunt laboriosam natus quasi quae consequuntur! Ratione molestiae laboriosam natus quasi eaque, soluta placeat, cum commodi quia maxime esse aliquam, error ex inventore illo distinctio ut. Neque vitae corporis officia asperiores fugiat. Id est omnis libero minus fugiat saepe illum itaque sapiente ea, expedita illo placeat aliquam, molestiae cupiditate harum accusamus perferendis? Velit doloribus impedit deleniti minus aliquam non sit veniam at odio autem, ducimus assumenda cupiditate. Eaque omnis molestiae placeat reiciendis alias ipsa et amet consequuntur, labore enim non possimus ullam nisi illum unde, commodi a temporibus ut quaerat adipisci molestias voluptatum quis tempora? Adipisci doloribus eum debitis sapiente vitae dolorum officiis qui maiores aut quas expedita fugit, iure suscipit quisquam ab eligendi? Ullam veniam eius, dolores consequatur architecto inventore praesentium sit fuga, voluptates eligendi voluptate nisi quaerat est animi. Optio fugiat est deserunt ullam ab, sed assumenda ratione unde! Est dignissimos enim autem dicta vel culpa earum quaerat tenetur magni fugit suscipit, sed animi consectetur illo, mollitia blanditiis. Magni reprehenderit voluptate necessitatibus molestiae nesciunt saepe ipsum deleniti repellendus dicta, rem earum obcaecati dolorum facere veniam amet commodi mollitia, eos accusamus assumenda ab quo suscipit est? Atque obcaecati officiis aliquid corrupti vel libero doloremque quod corporis labore rem praesentium nostrum magnam repellendus, odit itaque neque autem. Rem quo quam excepturi rerum quasi eveniet aliquid. Inventore facere modi ut? Ad eos inventore cumque accusamus illo molestias porro consequuntur laboriosam dicta veritatis error alias earum ea repellendus, pariatur modi id aliquam eius esse animi exercitationem accusantium asperiores. Ipsa illo id veniam reprehenderit, minus fugiat corporis assumenda recusandae at sapiente quia excepturi. Atque porro necessitatibus, in qui corrupti aspernatur obcaecati, voluptas molestias non vitae quasi, omnis itaque dolores assumenda soluta. Sapiente beatae earum incidunt placeat dicta corporis nulla nesciunt minus accusamus? Odio quam ipsam eum aut eos doloribus distinctio nulla debitis, at, explicabo quod, fugiat suscipit dolores ut minus assumenda aliquid eius maxime fugit quo exercitationem. Eaque asperiores, explicabo hic, consectetur repudiandae voluptates quia at possimus reiciendis iure consequatur unde! Deleniti rem iure harum minus, quod asperiores. Dicta consectetur quia quam exercitationem, fugiat deleniti sunt explicabo itaque tempore alias maiores assumenda quisquam aliquam at in voluptatibus maxime modi ipsum. Repudiandae, voluptates dolore officia vitae quos autem incidunt nihil nesciunt minus in ullam pariatur iste suscipit aliquid beatae. Quam, in deserunt! Repellat deserunt nisi quasi vero in fugiat amet, sequi aliquid officiis impedit aspernatur nostrum eligendi saepe eveniet? Ut ducimus fugit delectus maiores labore suscipit exercitationem. Deleniti aperiam necessitatibus pariatur odio numquam facilis corrupti! Aspernatur quia eligendi assumenda natus consequatur esse blanditiis illo modi impedit non sint nihil est, vero tempora iure temporibus hic sapiente ipsum eos voluptatibus quo eveniet nobis corporis. Rem id magnam fugiat ad quam unde ex.</p>
        </Modal.Body>
      </Modal> */}
      <Button
        className={`btn mainButton ${
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
