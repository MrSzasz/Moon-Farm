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

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <NavBar />
        <Routes>
          <Route path="/" element={<IndexContent />} />
          <Route path="/tienda/:seasonUrl/:packDetail" element={<ItemDetailContainer />} />
          {/* <Route path="/detalle" element={<ItemDetailContainer />} /> */}
          <Route path="/carrito" element={<Cart />} />
          <Route path="/tienda" element={<Categories />} />
          <Route path="/tienda/:seasonUrl" element={<ItemListContainer />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
