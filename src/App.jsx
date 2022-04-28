import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (

  <>
    <NavBar />
    <ItemListContainer greeting='Hola! Soy un greeting!' subGreeting='Bienvenido a mi pagina!' />
  </>
  
  )
}

export default App;