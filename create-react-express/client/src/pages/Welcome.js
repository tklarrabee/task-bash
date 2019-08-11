import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
// import Form from 'react-bootstrap/Form'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
// import NavbarLogin from "../components/NavbarLogin"; // Login/ Logout Nabar Component > Dynamic Navbar Component 
// import Footer from "../components/Footer";


class Welcome extends Component {
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
                            <Carousel>
                                <Carousel.Item>
                                    <img widtch={500} Height={400}
                                        className="d-block w-100"
                                        src="https://i.pinimg.com/originals/52/87/8e/52878ebc087ea97731327ddd1842e0fc.png"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img widtch={500} Height={400}
                                        className="d-block w-100"
                                        src="https://i2.wp.com/gernotkapteina.com/wp-content/uploads/2015/11/pmback.png?fit=816%2C361&ssl=1"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                            
                            <Card>
  <Card.Header>Put your team on the path to Operational Excellence</Card.Header>
  <Card.Body>
    <Card.Title>Simplify project planning</Card.Title>
    <Card.Text>
    Prioritizing, scheduling, and assigning tasks have never been easier. Dynamic Request Forms ensure teams have every project detail before they start working. Visualize dependencies, identify conflicts, and easily reschedule tasks with Task-Bash chart.
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
export default Welcome;
