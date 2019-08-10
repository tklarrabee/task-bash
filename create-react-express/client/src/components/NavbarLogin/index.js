import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarLogin() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Task-Bash</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/create">Create Account</Nav.Link>

      </Nav>

    </Navbar>
  );
}

export default NavbarLogin;
