import { useState, useEffect } from "react";
import "./ProductListPage.css";
import ProductListCard from "../components/cards/ProductListCard";
import { Container, Row, Col } from "react-bootstrap";


const ProductListPage = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
      fetch("http://localhost:8080/api/product")
        .then((res) => res.json())
        .then((data) => setProductList(data));
      console.log(productList);
  }, [productList]);

  return (
    <Container fluid>
      <Row>
        {productList.map((product) => (
          <Col md={3}>
          <ProductListCard
            productName={product.productName}
            price={product.price}
          />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductListPage;
