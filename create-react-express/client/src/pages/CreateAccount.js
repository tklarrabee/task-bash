import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Register from "../components/Register"


class CreateAccount extends Component {
  state = {
    login: ""
  };
  render() {
    return (
      <div style={{width:"23rem"}}>
          <Card.Body>
            <Card.Title>Fill out to Create Account:</Card.Title>
          
        {/* <Login /> */}
           <Register />


           <Card.Title>Already have an Account?</Card.Title>
            <Button variant="dark" href="/login">
              Login
            </Button>
            {/* <Button variant="dark" href="/register">
              Create Account
            </Button> */}
          </Card.Body>
      </div>
    );
  }
}

export default CreateAccount
