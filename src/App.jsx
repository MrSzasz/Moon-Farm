import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar.jsx";
import ItemCount from "./components/ItemCount/ItemCount";


import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const greeting = "Hola! Soy un greeting!";

  return (
    <>
      <NavBar />
      <ItemListContainer
        greeting={greeting}
        subGreeting="Bienvenido a mi pagina!"
      />
      <ItemCount stock={7} initial={1} />
    </>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import './style.css';

// function App() {
//   const [count, setCount] = useState(0);
//   const [date, SetDate] = useState(Date);
// const [boolean, setBoolean] = useState(false)

//   function addCount() {
//     setCount(count + 1);
//     SetDate(Date())
//   }

// useEffect(() => { // se usa para procesarse LUEGO del render
//   console.log('hola')
// }, []) // un solo render

// useEffect(() => { // se usa para procesarse LUEGO del render
//   console.log("solo cuando cambia el boolean")
// }, [boolean]) // dato a watchear

// function changeBoolean(){
// setBoolean(!boolean);
// }

//   return (
//     <div>
//       <button onClick={addCount}>Valor: {count}</button>
//       <button onClick={changeBoolean}>Bool</button>
//       <p>Hoy es {date}</p>
//     </div>
//   );
// }

// export default App
