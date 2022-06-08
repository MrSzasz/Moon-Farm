// =========================  STYLES  =========================

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

// =========================  LIBRARIES  =========================

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// =========================  CUSTOM IMPORTS  =========================

import { useNightContext } from "./context/NightContext/NightContext";
import CartContextProvider from "./context/CartContext/CartContext";

// ----------  COMPONENTS  ----------

import NavBar from "./components/NavBar/NavBar";
import IndexContent from "./components/IndexContent/IndexContent";
import Categories from "./components/Categories/Categories";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";




function App() {
  const { isNight } = useNightContext();

  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className={`body ${isNight}`}>
          <NavBar />
          <Routes>
            <Route path="/" element={<IndexContent />} />
            <Route path="/tienda" element={<Categories />} />
            <Route path="/tienda/:seasonUrl" element={<ItemListContainer />} />
            <Route
              path="/tienda/:seasonUrl/:packDetail"
              element={<ItemDetailContainer />}
            />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
