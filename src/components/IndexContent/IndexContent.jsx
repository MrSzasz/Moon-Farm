// =========================  STYLES  =========================

import "./IndexContent.scss";

// =========================  LIBRARIES  =========================

import { Link } from "react-router-dom";

// =========================  CUSTOM IMPORTS  =========================

import { useNightContext } from "../../context/NightContext/NightContext";





const IndexContent = () => {

  const { isNight } = useNightContext();

  return (
    <div className="indexContainer">
      <div className={`mainImg ${isNight ? "mainImgNight" : ""}`}></div>
      <h1 className="text-center"> QUIENES SOMOS </h1>
      <p>
        ¡Bienvenidos a Moon Farm! Somos una pequeña granja ubicada en el Pueblo Pelícano, desde aquí nos encargamos de cultivar diariamente una gran variedad de deliciosas frutas, saludables verduras y de la fabricación de diferentes productos artesanales.
        Cada día armamos los paquetes seleccionando los los mejores productos para la venta, siempre apostando por la calidad de los mismos, buscando lograr la satisfacción de nuestros clientes de la forma mas real posible, cumpliendo todas y cada una de sus expectativas al momento de degustar nuestros productos. <br /> <br />
        Nuestros paquetes se dividen en 3 niveles, el nivel inicial, <span className="silverSpan">PLATA</span>, el nivel intermedio, <span className="goldSpan">ORO</span>, y por ultimo el nivel <span className="iridiumSpan">IRIDIO</span>, cada uno de ellos cuenta con sus respectivos cultivos de temporada, y recetas para los mismos, las cuales viene impresas en un papel reciclado hecho por nosotros mismos. <br /> <br />
        Cada producto despacha en la noche, es decir que los pedidos llegaran al dia siguiente, independientemente de la cantidad de los mismos, pero siempre tengan por seguro que llegaran, porque gracias a nuestro invernadero podemos abastecernos de productos que estén fuera de temporada. <br /> <br />
        Asi que, ¿Que esperas para poder disfrutar de todos los sabores que el Pueblo Pelícano tiene para ofrecerte? ¡Haz click en el botón que se encuentra debajo para ver todos los productos disponibles!
      </p>
      <Link className={`btn mainButton ${isNight && 'mainButtonNight'}`} to="/tienda">
        TIENDA &gt;{" "}
      </Link>
    </div>
  );
};

export default IndexContent;
