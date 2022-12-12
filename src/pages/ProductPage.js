import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ProductPage.css";
import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";

const ProductPage = () => {
  const [product, setProduct] = useState([]);

  const { productID } = useParams();

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`http://localhost:8080/api/product/${productID}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
      console.log(product);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <Container fluid>
      <Row>
        <Card key="" className="m-5">
          <Card.Body>
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default ProductPage;
