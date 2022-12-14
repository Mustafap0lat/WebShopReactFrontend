import React from "react";
import { CartContext } from "../CartContext";
import { useEffect, useState, useContext } from "react";
import ShoppingBagCard from "../components/cards/ShoppingBagCard";
import { Button, Col, Container, Row, Stack, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShoppingBagPage = () => {
  const { items, getTotalPrice } = useContext(CartContext);
  let [total, setTotal] = useState("");

  useEffect(() => {
    setTotal(getTotalPrice());
  }, [getTotalPrice]);

  return (
    <Container>
      <Row className="m-5">
        <Col sm={8}>
          {items.map((product, index) => (
            <Stack key={index}>
              <ShoppingBagCard
                photo={product.product.photo}
                productName={product.product.productName}
                price={product.product.price}
                details={product.product.details}
                quantity={product.qty}
              />
            </Stack>
          ))}
        </Col>
        <Col sm={4}>
          <Container className="bg-white p-5">
            <Card.Title className="mb-5 fs-3 fw-bold">Order Summary</Card.Title>
            <Stack
              direction="horizontal"
              className="justify-content-between mb-3"
            >
              <Card.Subtitle className="fs-5">Subtotal</Card.Subtitle>
              <Card.Subtitle className="fs-5">{total} kr</Card.Subtitle>
            </Stack>
            <Stack
              direction="horizontal"
              className="justify-content-between mb-3"
            >
              <Card.Subtitle className="fs-5">Shipping</Card.Subtitle>
              <Card.Subtitle className="fs-5">0 kr</Card.Subtitle>
            </Stack>
            <Stack
              direction="horizontal"
              className="justify-content-between mb-5"
            >
              <Card.Subtitle className="fs-5">Stock:</Card.Subtitle>
              <Card.Subtitle className="fs-5">In Stock</Card.Subtitle>
            </Stack>
            <Stack
              direction="horizontal"
              className="justify-content-between mb-5"
            >
            <Card.Subtitle className="fs-4">Total</Card.Subtitle>
            <Card.Subtitle className="fs-4">{total} kr</Card.Subtitle>
            </Stack>
            <Stack
              direction="horizontal"
              className="justify-content-center"
            >
            <Button
                className="bg-black border 0 p-4 fs-5 fw-bold border 0 col-md-10 mt-5"
              >
                <Link className="text-white text-decoration-none" to="/checkout">CHECKOUT</Link>
              </Button>
            </Stack>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingBagPage;
