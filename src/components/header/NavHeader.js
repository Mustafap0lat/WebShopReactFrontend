import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/logo.png";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavHeader = () => {
  const searchIcon = <BsSearch />;
  const shoppingCartIcon = <FaShoppingCart />;
  const userIcon = <FaUser />;

  return (
    <div>  
        <div className="d-flex justify-content-between align-items-sm-center bg-black p-3">
          <Navbar.Brand href="#">
            <img alt="Specula-Logo" width="100" height="60" src={logo} />
          </Navbar.Brand>
          <Form className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Link to="/shoppingbagpage">
              <div className="ms-5 text-white">{shoppingCartIcon}</div>
            </Link>
            <Link>
              <div className="ms-5 me-5 text-white ">{userIcon}</div>
            </Link>
          </Form>
      </div>
      <Navbar bg="black" expand="lg">
        <Container>
          <Nav.Link className="text-white">Home</Nav.Link>
          <Nav.Link className="text-white">Products</Nav.Link>
          <Nav.Link className="text-white">About us</Nav.Link>
          <Nav.Link className="text-white">Contact</Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavHeader;
