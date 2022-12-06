import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";

const NavigationHeader = () => {
  return (
    <div>    
        <Navbar bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/"><img alt="Specula-Logo" width="100" height="60" src={logo}/></Navbar.Brand>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Container>
        </Navbar>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav>
              <Link to="/">Home</Link>
              <Link to="/productlistpage">Products</Link>
              <Link to="/aboutus">About us</Link>
              <Link to="/contact">Contact</Link>
            </Nav>
          </Container>
        </Navbar>
    </div>
  );
};

export default NavigationHeader;