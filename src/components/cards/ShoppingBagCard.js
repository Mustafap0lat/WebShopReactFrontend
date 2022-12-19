import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Stack, Button } from "react-bootstrap";

const ShoppingBagCard = ({
  productID = "",
  productName = "",
  price = "",
  details = "",
  quantity = "",
  photo = "",
}) => {



  return (
    <Row className="mb-5">
      <Col sm={3}>
        <Card.Img variant="top" src={photo} />
      </Col>
      <Col sm={9} md={8}>
        <Stack direction="horizontal" className="justify-content-between mb-4">
          <Card.Title className="fs-5">{productName}{productID}</Card.Title>
          <Card.Text className="fs-6 fw-bold">QTY: {quantity} </Card.Text>    
        </Stack>
        <Card.Text className="fs-6">#STYLE GREENWIZARD</Card.Text>
        <Stack direction="horizontal" className="justify-content-between mb-4">
          <Card.Text className="fs-6">{details}</Card.Text>
          <Card.Text className="fs-5 fw-bold">{price} kr</Card.Text>
        </Stack>
      </Col>
    </Row>
  );
};

export default ShoppingBagCard;
