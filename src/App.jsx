import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import IndexContent from "./components/IndexContent/IndexContent";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import CartContextProvider from "./context/cartContext/cartContext"; 

function App() {
  let today = new Date();
  let time = today.getHours();
  let isNight;
  // time = 20;
  // time = 11;

  if (time <= 6 || 19 <= time) {
    isNight = "night";
  }

  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className={`body ${isNight}`}>
          <NavBar classForNight={isNight} />
          <Routes>
            <Route path="/" element={<IndexContent classForNight={isNight} />} />
            <Route
              path="/tienda"
              element={<Categories classForNight={isNight} />}
            />
            <Route
              path="/tienda/:seasonUrl"
              element={<ItemListContainer classForNight={isNight} />}
            />
            <Route
              path="/tienda/:seasonUrl/:packDetail"
              element={<ItemDetailContainer classForNight={isNight} />}
            /> 
            <Route path="/carrito" element={<Cart />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
