import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer";


class Login extends Component {
    state = {
        login: ""
    };
    render() {
        return (
            <div>
                <NavbarLogin />
                <Wrapper>
                    <Container style={{ marginTop: 30 }}>
                        <Wrapper>


                            <Card>
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
                                            <Button variant="primary" type="submit">
                                                Submit
  </Button>
                                        </Form>
                                    </Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <Button variant="primary">Login</Button>
                                    <Button variant="primary">Create Account</Button>
                                </Card.Body>
                                <Button variant="primary" href="/summary">Temp: Logged in</Button>
                            </Card>
                            <div>

                            </div>
                        </Wrapper>
                    </Container>
                    <Footer />
                </Wrapper>
            </div>


        );
    }
}
export default Login;
