// =========================  STYLES  =========================

import "./NavBar.scss";

// =========================  LIBRARIES  =========================

import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

// =========================  CUSTOM IMPORTS  =========================

import { useNightContext } from "../../context/NightContext/NightContext";

// ----------  COMPONENTS  ----------

import CartWidget from "../CartWidget/CartWidget";



function NavBar() {

  const [show, setShow] = useState(false);
  const { isNight } = useNightContext();


  // ==========  SHOW DROPDOWN  ========== //

  function changeDisplay() {
    setShow((prev) => !prev);
  }


  // ==========  RETURN  ========== //

  return (
    <header className={isNight ? "headerNight" : ""}>
      <Link
        to="/"
        className="logo text-center d-flex justify-content-center align-items-center gap-2 linkOnNavBar"
      >
        <img src="https://i.imgur.com/Kh3WU4k.png" alt="" />
      </Link>
      <nav>
        <ul>
          <Link to="/" className="linkOnNavBar">
            <li className="liWithHover">INICIO</li>
          </Link>
          <div>
            <Link to="/tienda" className="text-center liWithHover">
              TIENDA
            </Link>
            <button
              className={`buttonDropdown ${isNight ? "buttonDropdownNight" : ""
                }`}
              onClick={() => changeDisplay()}
            >
              <AiOutlineDown className="liWithHover" size={20} />
            </button>
            {show && (
              <div
                className={`dropDownNavBar ${isNight ? "dropDownNavBarNight" : ""
                  }`}
              >
                <Link onClick={() => changeDisplay()} to="/tienda/primavera">
                  PRIMAVERA
                </Link>
                <Link onClick={() => changeDisplay()} to="/tienda/verano">
                  VERANO
                </Link>
                <Link onClick={() => changeDisplay()} to="/tienda/otoño">
                  OTOÑO
                </Link>
                <Link onClick={() => changeDisplay()} to="/tienda/especiales">
                  ESPECIALES
                </Link>
              </div>
            )}
          </div>
          <CartWidget />
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
