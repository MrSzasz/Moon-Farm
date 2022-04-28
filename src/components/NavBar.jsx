function NavBar() {
  return (
    <header>
      <div className="logo center"> MOON FARM 🌙</div>
      <nav>
        <ul>
          <li><a href="#">INICIO</a></li>
          <li><a href="#">TIENDA</a></li>
          <li><a href="#">CARRITO</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

// function Titulo({titulo, subTitulo}) {
//   return(
//     <h1>{titulo}</h1>
//   )
// }

// <Titulo titulo="hola soy el titulo" subTitulo = 'yo soy el subtitulo'/>