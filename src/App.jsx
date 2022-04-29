import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar.jsx";

import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

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