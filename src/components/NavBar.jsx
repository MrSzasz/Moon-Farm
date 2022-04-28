import CartWidget from "./CartWidget/CartWidget";

function NavBar() {
  return (
    <header>
      <div className="logo center"> MOON FARM <i class="fa-solid fa-moon"></i></div>
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