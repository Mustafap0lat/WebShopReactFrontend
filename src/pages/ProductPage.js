import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "react-bootstrap/Card";
import { Button, Col, Container, Row, Stack, Accordion} from "react-bootstrap";
import { CartContext } from "../CartContext";
import { BsFillHeartFill, BsFillShareFill } from "react-icons/bs";
import "./ProductPage.css";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const heartIcon = <BsFillHeartFill />;
  const shareIcon = <BsFillShareFill />;

  const [product, setProduct] = useState([]);
  const { addItemToCart } = useContext(CartContext);

  const { productID } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/api/product/${productID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  });

  return (
    <Container>
      <Row className="m-5">
        <Col>
          <Card>
            <Card.Img variant="top" src={product.photo} />
          </Card>
        </Col>
        <Col>
          <Card.Body>
            <Card.Title className="mb-2 fs-1 fw-bold">
              {product.productName}
            </Card.Title>
            <Card.Subtitle className="mb-4 fs-3 fw-bold">
              {product.price} kr
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 fs-5">Size: OneSize</Card.Subtitle>
            <Card.Subtitle className="mb-4 fs-5">In Stock</Card.Subtitle>
            <Stack
              direction="horizontal"
              className="justify-content-center mb-4"
            >
              <Button
                className="bg-black border 0 col-md-10 p-4 fs-2 fw-bold "
                onClick={() => addItemToCart(productID)}
              >
                ADD TO BAG
              </Button>
            </Stack>
            <Stack
              direction="horizontal"
              className="justify-content-center mb-4 fs-2"
              gap={5}
            >
               <Link className="text-black">{heartIcon}</Link>
               <Link className="text-black">{shareIcon}</Link>
            </Stack>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Details</Accordion.Header>
                <Accordion.Body>{product.details}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Size & Fit</Accordion.Header>
                <Accordion.Body>{product.size}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Shipping & Returns</Accordion.Header>
                <Accordion.Body>
                  You may return most new, unopened items within 30 days of
                  delivery for a full refund. We'll also pay the return shipping
                  costs if the return is a result of our error (you received an
                  incorrect or defective item, etc.).
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
