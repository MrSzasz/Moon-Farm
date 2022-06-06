import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { useNightContext } from "../../context/NightContext/NightContext";

function NavBar() {
  const { isNight } = useNightContext();

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
          <Link to="/tienda" className="linkOnNavBar">
            <li className="liWithHover">TIENDA</li>
          </Link>
          <CartWidget />
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
