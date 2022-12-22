import { useState, useEffect } from "react";
import "./ProductListPage.css";
import ProductListCard from "../components/cards/ProductListCard";
import {
  Container,
  Row,
  Col,
  Form,
  Dropdown,
  Image,
  Carousel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import slide1 from "../assets/images/contactslide1.800x400.png";
import slide2 from "../assets/images/contactslide3800x400.png";
import slide3 from "../assets/images/glassgirl2.800x400.png";

const ProductListPage = () => {
  const [sortBy, setSortBy] = useState("");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/product")
      .then((res) => res.json())
      .then((data) => setProductList(data));
    console.log(productList);
  }, []);

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  let sortedData;
  if (productList.length > 0) {
    if (sortBy === "alphabetical") {
      sortedData = productList.sort((a, b) =>
        a.productName.localeCompare(b.productName)
      );
    } else if (sortBy === "high") {
      sortedData = productList.sort((a, b) => b.price - a.price);
    } else if (sortBy === "low") {
      sortedData = productList.sort((a, b) => a.price - b.price);
    } else {
      sortedData = productList;
    }
  }

  return (
    <>
      <Row className="d-flex justify-content-center mt-5">
        <Col xs={7}>
          <Carousel>
            <Carousel.Item>
              <Image
                className="d-block w-100 rounded"
                src={slide1}
                alt="First slide"
                height="500"
              />
              <Carousel.Caption>
                <p>"Looking for some new glasses. We got your back"</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100 rounded"
                src={slide2}
                alt="Second slide"
                height="500"
              />

              <Carousel.Caption>
                <p>"Find your way to your new pair of glasses. "</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100 rounded"
                src={slide3}
                alt="Third slide"
                height="500"
              />
              <Carousel.Caption>
                <p>You deserve a new pair of sunglasses</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Container fluid>
        <Form.Label className="mt-5 ms-5 fs-6 fw-bold d-flex justify-content-end me-5">Sort by:</Form.Label>
        <Dropdown
          className="ms-5 d-flex justify-content-end me-5"
          onSelect={(eventKey) => handleSortChange(eventKey)}
        >
          <Dropdown.Toggle
            className="bg-black border none"
            variant="secondary"
            id="sort-dropdown"
          >
            {sortBy === "alphabetical"
              ? "Alphabetical"
              : sortBy === "low"
              ? "Low"
              : "High"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="alphabetical">Alphabetical</Dropdown.Item>
            <Dropdown.Item eventKey="low">Low Price</Dropdown.Item>
            <Dropdown.Item eventKey="high">High Price</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {sortedData &&
          sortedData.map((item) => <div key={item.productID}></div>)}
        <Row>
          {productList.map((product, index) => (
            <Col md={3} key={index}>
              <Link
                className="text-decoration-none text-black"
                to={`/product/${product.productID}`}
              >
                <ProductListCard
                  photo={product.photo}
                  productName={product.productName}
                  price={product.price}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductListPage;
