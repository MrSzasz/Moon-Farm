import CartWidget from "./CartWidget/CartWidget";
import { BsFillMoonFill } from 'react-icons/bs';

function NavBar() {
  return (
    <header>
      <div className="logo text-center"> MOON FARM <BsFillMoonFill /></div>
      <nav>
        <ul>
          <li><a href="#">INICIO</a></li>
          <li><a href="#">TIENDA</a></li>
          <CartWidget />
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;