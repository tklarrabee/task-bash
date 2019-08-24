import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
// import NavbarLogin from "../components/NavbarLogin";
// import Footer from "../components/Footer";

class Login extends Component {
  state = {
    login: ""
  };
  render() {
    return (
      <div>
          <Card.Header>Login:</Card.Header>
          <Card.Body>
            <Card.Title>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>User Name:</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="dark" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Title>
            <Card.Text />
            <Button variant="dark">Login</Button>
            <Button variant="dark">Create Account</Button>
          </Card.Body>
      </div>
    );
  }
}
export default Login;
