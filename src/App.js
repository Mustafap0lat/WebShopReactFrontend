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
import { CartProvider } from "./CartContext";
import CheckOutPage from "./pages/CheckOutPage";
import ContactPage from "./pages/ContactPage";
import Aboutus from "./pages/Aboutus";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <CartProvider>
      <NavHeader/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/productlist" element={<ProductListPage/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="product/:productID" element={<ProductPage/>}/>
        <Route path="/shoppingbag" element={<ShoppingBagPage/>}/>
        <Route path="/checkout" element={<CheckOutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </CartProvider>
  );
}

export default App;
