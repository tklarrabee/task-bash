import React, { Component } from "react";

import Wrapper from "../components/Wrapper";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Welcome extends Component {
    state = {
        login: ""
    };
    render() {
        return (
            <div>
                <Container style={{ marginTop: 30 }}>
                    <Wrapper>
                        <Jumbotron>
                            <h1>Welcome to Task-Bash</h1>
                            <p>
                                This is a collaborative project management application to keep your project and team focused.
  </p>
                            <p>
                                <Button variant="primary">Learn more</Button>
                            </p>
                        </Jumbotron>
                        
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Email
    </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Password
    </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                            <fieldset>
                                <Form.Group as={Row}>
                                    <Form.Label as="legend" column sm={2}>
                                        Terms...
      </Form.Label>
                                    <Col sm={10}>
                                        <Form.Check
                                            type="radio"
                                            label="I Agree"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                        />

                                    </Col>
                                </Form.Group>
                            </fieldset>
                            <Form.Group as={Row} controlId="formHorizontalCheck">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Form.Check label="Remember me" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button type="submit">Sign in</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Wrapper>
                </Container>
            </div>


        );
    }
}
export default Welcome;
