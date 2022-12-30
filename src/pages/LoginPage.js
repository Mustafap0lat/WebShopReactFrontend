import React from "react";
import Form from "react-bootstrap/Form";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Row className="d-flex justify-content-center">
      <Col xs={4}>
        <Form className="mt-5 bg-white p-5 rounded">
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
          <Button className="d-flex justify-content-center bg-black border 0 p-2 fs-6 fw-bold border 0 col-md-12">
            <Link className="text-white text-decoration-none" to="/">
              Login
            </Link>
          </Button>
          </Form.Group>
          <Form.Group>
            <Link to="/register" className="fs-6">
              Register
            </Link>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
