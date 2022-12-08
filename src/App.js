import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage";
import ProductListPage from "./pages/ProductListPage";
import ShoppingBagPage from "./pages/ShoppingBagPage";
import AddProduct from "./administrator/AddProduct"
import NavHeader from "./components/header/NavHeader";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <NavHeader/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/productpage" element={<ProductPage/>}/>
        <Route path="/productlistpage" element={<ProductListPage/>}/>
        <Route path="/shoppingbagpage" element={<ShoppingBagPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
