import CartWidget from "../CartWidget/CartWidget";
import { BsFillMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./NavBar.scss"


function NavBar({ classForNight }) {

  return (
    <header className={classForNight}>
      <Link to="/">
        <div className="logo text-center d-flex justify-content-center align-items-center gap-2">
          MOON FARM <BsFillMoonFill className="iconFont"/>
        </div>
      </Link>
      <nav>
        <ul>
          <Link to="/">
            <li>
              <a href="#">INICIO</a>
            </li>
          </Link>
          <Link to="/tienda">
            <li>
              <a href="#">TIENDA</a>
            </li>
          </Link>
          <CartWidget />
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
