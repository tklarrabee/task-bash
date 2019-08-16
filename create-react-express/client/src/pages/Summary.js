import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
// import NavbarAll from "../components/NavbarAll";
// import Footer from "../components/Footer";


class Summary extends Component {
    state = {
        login: ""
    };
    render() {
        return (
            <div>
                {/* <NavbarAll /> */}
                <Wrapper>
                    <Container style={{ marginTop: 30 }}>
                        <Wrapper>

                            {/* Nav Sidebar */}
                            <Row>
                                <Col xs={2}>
                                    <Card>
                                        <Card.Header>Links</Card.Header>
                                        <Button variant="primary" >New Project</Button>
                                        <Button variant="primary" >New Project</Button>
                                        <Button variant="primary" >New Project</Button>
                                        <Button variant="primary" >New Project</Button>
                                        <Button variant="primary" >New Project</Button>
                                        <Button variant="primary" >New Project</Button>
                                        <Button variant="primary" >New Project</Button>
                                        <Button variant="primary" >New Project</Button>
                                    </Card>
                                </Col>
                                {/* Top row column */}
                                <Col xs={10}>
                                    <Row>
                                        <Col xs={12}>
                                            <Card>
                                                <Card.Header>Boards!</Card.Header>
                                                <Container>
                                                    <Card.Body>
                                                        <Row>
                                                            <Col xs={6}>
                                                                <Card>
                                                                    <Card.Header>My Boards!</Card.Header>
                                                                    <Container>
                                                                        <Card.Body>
                                                                            <Row>
                                                                                <Col>

                                                                                    <Card.Title>You Currently have X Projects Open!</Card.Title>
                                                                                </Col>

                                                                            </Row>





                                                                        </Card.Body>
                                                                    </Container>
                                                                </Card>
                                                            </Col>
                                                            <Col xs={6}>

                                                                <Card>
                                                                    <Card.Header>Shared Boards!</Card.Header>
                                                                    <Container>
                                                                        <Card.Body>
                                                                            <Row>
                                                                                <Col>

                                                                                    <Card.Title>You Currently have X Projects Open!</Card.Title>
                                                                                </Col>

                                                                            </Row>





                                                                        </Card.Body>
                                                                    </Container>
                                                                </Card>
                                                            </Col>


                                                        </Row>





                                                    </Card.Body>
                                                </Container>
                                            </Card>
                                        </Col>

                                    </Row>

                                    <Row>



                                    </Row>

                                    <Row>
                                        <Col xs={12}>
                                            <Card>
                                                <Card.Header>Invites!</Card.Header>
                                                <Container>
                                                    <Card.Body>
                                                        <Row>
                                                            <Col>

                                                                <Card.Title>You Currently have X Projects Open!</Card.Title>
                                                            </Col>

                                                        </Row>





                                                    </Card.Body>
                                                </Container>
                                            </Card>
                                        </Col>


                                    </Row>
                                </Col>



                            </Row>
                            <div>

                            </div>
                        </Wrapper>
                    </Container>

                </Wrapper>
            </div>


        );
    }
}
export default Summary;
