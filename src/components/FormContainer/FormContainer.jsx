import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/CartContext";
import { useNightContext } from "../../context/NightContext/NightContext";
import "./FormContainer.scss";

const FormContainer = () => {
  const { isNight } = useNightContext();
  const { getDataForOrder } = useCartContext();

  return (
      
    <div className="orderContainer">
      <h2>SOLO UN PASO MAS...</h2>
      <p>
        ¡Ingrese sus datos y sera contactado a la brevedad! Tenga en cuenta que
        los pedidos se hacen en la noche, asi que llegaran al dia siguiente como
        mínimo
      </p>
      <form className="d-flex flex-column">
        <label htmlFor="orderName">
          Nombre completo<span>*</span>
        </label>
        <input id="inputOrderName"
          type="text"
          name="orderName"
          placeholder="Ingrese su nombre"
          required
        />
        <label htmlFor="orderMail">
          Mail<span>*</span>
        </label>
        <input id="inputOrderMail"
          type="mail"
          name="orderMail"
          placeholder="ejemplo@mail.com"
          required
        />
        <label htmlFor="orderNumber">
          Numero<span>*</span>
        </label>
        <input id="inputOrderNumber"
          type="number"
          name="orderNumber"
          placeholder="+54 9 1123456789"
          required
        />
        <label htmlFor="orderHome">
          Region<span>*</span>
        </label>
        <div className="d-flex justify-content-around">
          <input id="inputOrderCountry" type="text" name="orderCountry" placeholder="País" required />
          <input id="inputOrderCity" type="text" name="orderCity" placeholder="Ciudad" required />
        </div>
        <input id="inputOrderText"
          type="text"
          name="orderExtra"
          placeholder="¿Quiere agregar una nota?"
          rows="2"
          className="my-4"
        />
        <div className="d-flex align-items-center justify-content-center">
          <input className="mx-4" type="checkbox" name="orderNewsletter" />
          <label htmlFor="orderNewsletter" className="text-start">
            ¿Quiere suscribirse a nuestro newsletter?
          </label>
        </div>
        <div className="d-flex justify-content-around align-items-center">
          <button
            className={`btn mainButton w-25 ${
              isNight ? "mainButtonNight" : ""
            }`}
            onClick={(e)=> getDataForOrder(e)}
            type="submit"
          >
            FINALIZAR COMPRA
          </button>
        </div>
      </form>
      <span>*requerido</span>
    </div>
  );
};

export default FormContainer;
