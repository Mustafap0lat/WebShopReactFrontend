import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, Container, Stack } from "react-bootstrap";
import { CartContext } from "../../CartContext";
import { useContext } from "react";

const ShoppingBagCard = ({
  productID = "",
  productName = "",
  price = "",
  details = "",
  quantity = "",
  photo = "",
}) => {

  const { items, setItems } = useContext(CartContext);
  
  const handleIncrement = () => {
    setItems(
      items.map((item) => {
        if (item.product.productID === productID && item.qty < 10) {
        console.log("item productID", item.product.productID)
        console.log("productId", productID)
        console.log("Qty", item.qty)
          return {
            ...item,
            qty: item.qty + 1,
            totalPrice: item.totalPrice += item.product.price
          }
        }
        return item;
      })
    );
  };

  const handleDecrement = () => {
    setItems(
      items.map((item) => {
        if (item.product.productID === productID && item.qty > 1) {
        console.log("item productID", item.product.productID)
        console.log("productId", productID)
        console.log("Qty", item.qty)
          return {
            ...item,
            qty: item.qty - 1,
            totalPrice: item.totalPrice -= item.product.price
          };
        }
        return item;
      })
    );
  }; 

  return (
    <Row className="mb-5">
      <Col sm={3}>
        <Card.Img variant="top" src={photo} />
      </Col>
      <Col sm={9} md={8}>
        <Stack direction="horizontal" gap={3} className="mb-4">
          <Card.Title className="fs-5">{productName}</Card.Title>
          <Card.Title className="ms-auto"></Card.Title>
          <Button className="bg-black border none" onClick={handleDecrement}>-</Button>
          <Card.Title className="fs-6 fw-bold">QTY: {quantity} </Card.Title>    
          <Button className="bg-black border none" onClick={handleIncrement}>+</Button>
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
