import React from 'react'
import "./ProductListCard.css";
import productimage from "../../assets/images/productimage.jpg";

const ProductListCard = () => {
  return (
    <div className="product-card">
    <img className="product-image" alt="product" src={productimage} />
    <h3 className="product-title">BIANACA MOON SQUARE</h3>
    <p className="product-subtitle">980kr</p>
    </div>
  )
}

export default ProductListCard;