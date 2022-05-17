import CartWidget from "../CartWidget/CartWidget";
import { BsFillMoonFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import "./NavBar.scss"


function NavBar() {

  return (
    <header>
      <Link to="/">
        <div className="logo text-center">
          MOON FARM <BsFillMoonFill />
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
