import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage";
import ProductListPage from "./pages/ProductListPage";
import ShoppingBagPage from "./pages/ShoppingBagPage";
import AddProduct from "./administrator/AddProduct"
import NavigationHeader from "./components/header/NavigationHeader";

const App = () => {
  return (
    <div className="App">
      <NavigationHeader/>
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
