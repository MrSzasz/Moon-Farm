import { useEffect } from "react";
import { useCartContext } from "../../context/CartContext/CartContext";
import { useNightContext } from "../../context/NightContext/NightContext";
import "./FormContainer.scss";

const FormContainer = () => {
  const { isNight } = useNightContext();
  const { getDataForOrder } = useCartContext();

  useEffect(() => {
    const btn = document.getElementById('button');

    document.getElementById('form')
      .addEventListener('submit', function (e) {
        e.preventDefault();

        btn.value = 'CARGANDO...';

        const serviceID = 'default_service';
        const templateID = 'template_ncsighf';

        emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
            btn.value = 'FINALIZAR COMPRA';
          }, (err) => {
            btn.value = 'FINALIZAR COMPRA';
            alert(JSON.stringify(err));
          })
          .finally(
            getDataForOrder(),
            setTimeout(() => {
              window.location.reload()
            }, 5000)
          )
      });
    return
  }, [])

  return (
    <div className="orderContainer">
      <h2>SOLO UN PASO MAS...</h2>
      <p>
        ¡Ingrese sus datos y sera contactado a la brevedad! Tenga en cuenta que
        los pedidos se hacen en la noche, asi que llegaran al dia siguiente como
        mínimo
      </p>
      <form id="form" className="d-flex flex-column">
        <label htmlFor="inputOrderName">
          Nombre completo<span>*</span>
        </label>
        <input
          id="inputOrderName"
          type="text"
          name="inputOrderName"
          placeholder="Ingrese su nombre"
          required
        />
        <label htmlFor="inputOrderMail">
          Mail<span>*</span>
        </label>
        <input
          id="inputOrderMail"
          type="mail"
          name="inputOrderMail"
          placeholder="ejemplo@mail.com"
          required
        />
        <label htmlFor="orderNumber">
          Numero<span>*</span>
        </label>
        <input
          id="inputOrderNumber"
          type="number"
          name="orderNumber"
          placeholder="+54 9 1123456789"
          required
        />
        <label htmlFor="orderHome">
          Region<span>*</span>
        </label>
        <div className="d-flex justify-content-around">
          <input
            className="cityInput"
            id="inputOrderCountry"
            type="text"
            name="orderCountry"
            placeholder="País"
            required
          />
          <input
            className="cityInput"
            id="inputOrderCity"
            type="text"
            name="orderCity"
            placeholder="Ciudad"
            required
          />
        </div>
        <input
          id="inputOrderText"
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
          <input
            className={`mainButton ${isNight ? "mainButtonNight" : ""}`}
            type="submit"
            id="button"
            value="FINALIZAR COMPRA"
          />
        </div>
      </form>
      <span>*requerido</span>
    </div>
  );
};

export default FormContainer;
