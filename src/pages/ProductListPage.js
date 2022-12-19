import { useState, useEffect } from "react";
import "./ProductListPage.css";
import ProductListCard from "../components/cards/ProductListCard";
import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import productlistpicture from "../assets/images/productlistpicture.png"

const ProductListPage = () => {
  const [sortBy, setSortBy] = useState('');
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
    if (sortBy === 'alphabetical') {
      sortedData = productList.sort((a, b) => a.productName.localeCompare(b.productName));
    } else if (sortBy === 'high') {
      sortedData = productList.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'low') {
      sortedData = productList.sort((a, b) => a.price - b.price);
    } else {
      sortedData = productList;
    }
  }

  return (
    <div
      style={{ justifyContent: "center", alignItems: "center", margin: "auto" }}
    >
      <img
        src={productlistpicture}
        style={{ width: "100%", height: "60vh" }}
        alt=""
      />


    <Container fluid>
    <Form.Label className="mt-4 ms-5 fs-6 fw-bold">Sort by:</Form.Label>
      <Dropdown className="ms-5" onSelect={(eventKey) => handleSortChange(eventKey)}>
        <Dropdown.Toggle variant="secondary" id="sort-dropdown">
          {sortBy === 'alphabetical'
            ? 'Alphabetical'
            : sortBy === 'low'
            ? 'Low'
            : 'High'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="alphabetical">Alphabetical</Dropdown.Item>
          <Dropdown.Item eventKey="low">Low Price</Dropdown.Item>
          <Dropdown.Item eventKey="high">High Price</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {sortedData && sortedData.map((item) => (
        <div key={item.productID}></div>
      ))}
      <Row>
        {productList.map((product, index) => (
          <Col md={3} key={index}>
            <Link className="text-decoration-none text-black" to={`/product/${product.productID}`}>
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
    </div>
  );
};

export default ProductListPage;
