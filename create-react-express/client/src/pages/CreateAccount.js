import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
// import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
// import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
// import NavbarLogin from "../components/NavbarLogin";
// import Footer from "../components/Footer";


class CreateAccount extends Component {
    state = {
        login: ""
    };
    render() {
        return (
            <div>
                {/* <NavbarLogin /> */}
                <Wrapper>
                    <Container style={{ marginTop: 30 }}>
                        <Wrapper>


                            <Card>
                                <Card.Header>Create Account:</Card.Header>
                                <Card.Body>
                                    <Card.Title>Fill out to Create Account:</Card.Title>
                                    <Card.Text>
                                        <Form>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" />
                                                
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control 
                                                        type="password" 
                                                        placeholder="Password" 
                                                        name="password"
                                                        value={this.state.password}
                                                        onChange={this.handleChange}
                                                    />
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Group controlId="formGridAddress1">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control placeholder="1234 Main St" />
                                            </Form.Group>

                                            <Form.Group controlId="formGridAddress2">
                                                <Form.Label>Address 2</Form.Label>
                                                <Form.Control placeholder="Apartment, studio, or floor" />
                                            </Form.Group>

                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label>City</Form.Label>
                                                    <Form.Control />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridState">
                                                    <Form.Label>State</Form.Label>
                                                    <Form.Control as="select">
                                                        <option>Choose...</option>
                                                        <option>...</option>
                                                    </Form.Control>
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridZip">
                                                    <Form.Label>Zip</Form.Label>
                                                    <Form.Control />
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Group id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Check me out" />
                                            </Form.Group>

                                            <Button variant="primary" type="submit">
                                                Submit
  </Button>
                                        </Form>
                                    </Card.Text>
                                    <Button variant="primary" href="/login">Login</Button>
                                    <Button variant="primary" href="/create">Create Account</Button>
                                </Card.Body>
                            </Card>
                            <div>

                            </div>
                        </Wrapper>
                    </Container>
                    {/* <Footer /> */}
                </Wrapper>
            </div>


        );
    }
}
export default CreateAccount;
