import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/images/logo.png";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const NavHeader = () => {
  const shoppingCartIcon = <FaShoppingCart />;
  const userIcon = <FaUser />;

  return (
    <Container fluid className="bg-black overflow-hidden">
      <Container
        fluid
        className="d-flex justify-content-between align-items-sm-center p-3 border-bottom"
      >
        <Link to="/">
          <img
            className="ms-4"
            alt="Specula-Logo"
            width="100"
            height="60"
            src={logo}
          />
        </Link>
        <Form className="d-flex align-items-center">
          <Form.Control
            size="lg"
            type="search"
            placeholder="Search Produkt . . ."
            className="me-2 bg-dark border-0 text-white"
            aria-label="Search"
          />
          <Link to="/shoppingbag">
            <Container className="ms-5 text-white">
              {shoppingCartIcon}
            </Container>
          </Link>
          <Link to="/user">
            <Container className="ms-5 me-4 text-white ">{userIcon}</Container>
          </Link>
        </Form>
      </Container>
      <Container fluid className="p-3">
        <Row>
          <Col xs={6} md={4} className="d-flex justify-content-between ">
            <LinkContainer to="/">
              <Nav.Link className="text-white ms-5">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/productlist">
              <Nav.Link className="text-white">Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/aboutus">
              <Nav.Link className="text-white">About us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="text-white">Contact</Nav.Link>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default NavHeader;
