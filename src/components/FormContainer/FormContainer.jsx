import { Link } from "react-router-dom";
import { useNightContext } from "../../context/NightContext/NightContext";
import "./FormContainer.scss";

const FormContainer = () => {
  const { isNight } = useNightContext();

  return (
    <div className="orderContainer">
      <h2>SOLO UN PASO MAS...</h2>
      <p>
        ¡Ingrese sus datos y sera contactado a la brevedad! Tenga en cuenta que
        los pedidos se hacen en la noche, asi que llegaran al dia siguiente como
        mínimo
      </p>
      <form className="d-flex flex-column">
        <label for="orderName">
          Nombre completo<span>*</span>
        </label>
        <input
          type="text"
          name="orderName"
          placeholder="Ingrese su nombre"
          required
        />
        <label for="orderMail">
          Mail<span>*</span>
        </label>
        <input
          type="mail"
          name="orderMail"
          placeholder="ejemplo@mail.com"
          required
        />
        <label for="orderHome">
          Region<span>*</span>
        </label>
        <div className="d-flex justify-content-around">
          <input type="text" name="orderCountry" placeholder="País" required />
          <input type="text" name="orderCity" placeholder="Ciudad" required />
        </div>
        <input
          type="text"
          name="orderExtra"
          placeholder="¿Quiere agregar una nota?"
          rows="2"
          className="my-4"
        />
        <div>
          <input className="mx-4" type="checkbox" name="orderNewsletter" />
          <label for="orderNewsletter">
            ¿Quiere suscribirse a nuestro newsletter?
          </label>
        </div>
        <div className="d-flex justify-content-around align-items-center">
          <Link
            className={`btn mainButton ${isNight ? "mainButtonNight" : ""}`}
            to={`/carrito`}
          >
            &lt; VOLVER
          </Link>
          <button
            className={`btn mainButton w-25 ${
              isNight ? "mainButtonNight" : ""
            }`}
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
