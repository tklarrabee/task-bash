import React, { Component } from "react";
import Wrapper from "../components/Wrapper";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

import Card from 'react-bootstrap/Card'



class Logout extends Component {
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
                                <Card.Header>You've Successfully Logged Out!</Card.Header>
                                <Card.Body>
                                    <Card.Title>Click to Login:</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <Button variant="primary" href="/login">Login</Button>
                                    <Button variant="primary" href="create">Create Account</Button>
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
export default Logout;
