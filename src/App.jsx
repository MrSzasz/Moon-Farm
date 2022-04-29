import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar.jsx";

function App() {

  const greeting = 'Hola! Soy un greeting!';
  
  return (

  <>
    <NavBar />
    <ItemListContainer greeting={greeting} subGreeting='Bienvenido a mi pagina!' />
  </>
  
  )
}

export default App;