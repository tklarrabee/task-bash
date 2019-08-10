import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import NavbarAll from "../components/NavbarAll";
import Footer from "../components/Footer";


class Summary extends Component {
    state = {
        login: ""
    };
    render() {
        return (
            <div>
                <NavbarAll />
                <Wrapper>
                    <Container style={{ marginTop: 30 }}>
                        <Wrapper>

                            
                            <Card>
  <Card.Header>Welcome User!</Card.Header>
  <Card.Body>
    <Card.Title>You Currently have X Projects Open!</Card.Title>
    <Card.Text>
    Select a project from List Below to Continue Working!
    </Card.Text>
    <Button variant="primary" >New Project</Button>

  </Card.Body>
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
export default Summary;
