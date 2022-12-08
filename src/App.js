import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage";
import ProductListPage from "./pages/ProductListPage";
import ShoppingBagPage from "./pages/ShoppingBagPage";
import AddProduct from "./administrator/AddProduct"
import NavHeader from "./components/header/NavHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = () => {
  return (
    <div>
      <NavHeader/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/productlist" element={<ProductListPage/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/shoppingbag" element={<ShoppingBagPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
