import CartWidget from "../CartWidget/CartWidget";
import { BsFillMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <Link to="/">
        <div className="logo text-center">
          {" "}
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
          <li>
            <a href="#">TIENDA</a>
          </li>
          <CartWidget />
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
