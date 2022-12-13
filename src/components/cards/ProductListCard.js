import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ProductListCard = ({ productName = "", price = "", photo=""}) => {

  return (
    <Row>
        <Col>
          <Card className="m-5">
            <Card.Img variant="top" src={photo} />
            <Card.Body>
              <Card.Title className="">{productName}</Card.Title>
              <Card.Text>{price} kr</Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
};

export default ProductListCard;
