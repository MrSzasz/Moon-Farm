import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar.jsx";
import ItemCount from "./components/ItemCount/ItemCount";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const greeting = "Hola! Soy un greeting!";

  function cart(counter) {
    console.log(`Agregaste ${counter} objeto/s al carrito`);
  }

  return (
    <>
      <NavBar />
      <ItemListContainer
        greeting={greeting}
        subGreeting="Bienvenido a mi pagina!"
      />
      <ItemCount stock={7} initial={1} onAdd={cart} />
    </>
  );
}

export default App;