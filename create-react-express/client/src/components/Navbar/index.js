<<<<<<< HEAD
import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar1() {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Task-Bash</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/client">Client</Nav.Link>
      <Nav.Link href="/board">Board</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  );
}

export default Navbar1;
=======
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './style.css';

class Navbar extends Component {
  state = {
    login: ""
  };
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <ul>
          <li className="logo">
            <a href="/">Task-bash</a>
          </li>
          <li className="btn">
            <Link to={"/"}>test: To Welcome</Link>
          </li>
          <li className="btn">
            <Link to={"/client"}>test: To Client</Link>
          </li>
          <li className="btn">
            <Link to={"/board"}>test: To Board</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
>>>>>>> 9d673ad75a2aecd8c844f457902f958eeb087e0b
