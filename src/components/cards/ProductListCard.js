import React from "react";
import "./ProductListCard.css";
import productimage from "../../assets/images/productimage.jpg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ProductListCard = ({ productName = "", price = ""}) => {

  return (
    <Row>
        <Col>
          <Card className="m-5">
            <Card.Img variant="top" src={productimage} />
            <Card.Body>
              <Card.Title className="">{productName}</Card.Title>
              <Card.Text>{price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
};

export default ProductListCard;
