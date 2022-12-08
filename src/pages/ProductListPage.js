import { useState, useEffect } from "react";
import "./ProductListPage.css";
import ProductListCard from "../components/cards/ProductListCard";

const ProductListPage = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:8080/api/product")
        .then((res) => res.json())
        .then((data) => setProductList(data));
      console.log(productList);
    }, 1000);
    return () => clearInterval(interval);
  }, [productList]);

  return (
    <div>
      <section className="product-list-section">
        <div className="product-list-grid">
          {productList.map((product, index) => (
            <ProductListCard>
              <div key={index}>
                <p>ProductID: {product.productID}</p>
                <p>ProductName: {product.productName}</p>
                <p>productTitle: {product.productTitle}</p>
                <p>ProductDesciption: {product.description}</p>
                <p>Price: {product.productName}</p>
                <p>Photo: {product.photo}</p>
              </div>
            </ProductListCard>
          ))}
        </div>
      </section>
      {productList.map((product, index) => (
        <div key={index}>
          <p>ProductID: {product.productID}</p>
          <p>ProductName: {product.productName}</p>
          <p>productTitle: {product.productTitle}</p>
          <p>ProductDesciption: {product.description}</p>
          <p>Price: {product.productName}</p>
          <p>Photo: {product.photo}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductListPage;
