import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { useNightContext } from "../../context/NightContext/NightContext";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

function NavBar() {
  const { isNight } = useNightContext();
  const [show, setShow] = useState(false);

  function changeDisplay() {
    setShow((prev) => !prev);
  }

  return (
    <header className={isNight}>
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
              className={`buttonDropdown ${
                isNight ? "buttonDropdownNight" : ""
              }`}
              onClick={() => changeDisplay()}
            >
              <AiOutlineDown className="liWithHover" size={20} />
            </button>
            {show && (
              <div
                className={`dropDownNavBar ${
                  isNight ? "dropDownNavBarNight" : ""
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

          {/* <Link to="/tienda" className="linkOnNavBar">
            <li className="liWithHover">TIENDA</li>
          </Link> */}
          <CartWidget />
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
