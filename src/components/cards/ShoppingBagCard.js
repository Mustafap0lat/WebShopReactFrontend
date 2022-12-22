import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, Stack } from "react-bootstrap";
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
    const updatedItems = items.map((item) => {
      if (item.product.productID === productID) {
        return { ...item, quantity: item.quantity + 1 };
      }
      console.log(item)
      return item;
    });
    console.log(updatedItems)
    setItems(updatedItems); 
  };

 
  const handleDecrement = () => {
    const updatedItems = items.map((item) => {
      if (item.productID === productID && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setItems(updatedItems); 
  };

  return (
    <Row className="mb-5">
      <Col sm={3}>
        <Card.Img variant="top" src={photo} />
      </Col>
      <Col sm={9} md={8}>
        <Stack direction="horizontal" className="justify-content-between mb-4">
          <Card.Title className="fs-5">{productName}{productID}</Card.Title>
          <Button onClick={handleDecrement}>detta är minus</Button>
          <Card.Text className="fs-6 fw-bold">QTY: {quantity} </Card.Text>    
          <Button onClick={handleIncrement}>detta är plus</Button>
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
