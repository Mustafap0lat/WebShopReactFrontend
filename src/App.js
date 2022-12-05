import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import AddProduct from "./components/administrator/AddProduct";
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
