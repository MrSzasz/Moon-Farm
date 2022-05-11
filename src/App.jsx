import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const greeting = "Hola! Soy un greeting!";

  return (
    <div className="body">
      <NavBar />
      <ItemListContainer
      />
    </div>
  );
}

export default App;