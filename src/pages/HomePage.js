import { Button, Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
    return (
      <Container fluid className="home-page-container">
        <Row className="inner-home-page-container align-items-center">    
          <Col>
          <Container className="text-white fs-1 mb-4">Welcome to Specula</Container>
          <Container className="text-white fs-1"><Link to="/productlist"><Button className="text-white text-decoration-none p-2" variant="link border" >Go to latest products</Button></Link></Container>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default HomePage;
  