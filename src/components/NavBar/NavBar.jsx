import CartWidget from "../CartWidget/CartWidget";
import { BsFillMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar({ classForNight }) {
  return (
    <header className={classForNight}>
        <Link to="/" className="logo text-center d-flex justify-content-center align-items-center gap-2 linkOnNavBar">
          MOON FARM <BsFillMoonFill className="iconFont" />
        </Link>
      <nav>
        <ul>
          <Link to="/" className="linkOnNavBar">
            <li>INICIO</li>
          </Link>
          <Link to="/tienda" className="linkOnNavBar">
            <li>TIENDA</li>
          </Link>
          <CartWidget />
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
