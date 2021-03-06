import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarAll() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand >Task-Bash</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/summary">Summary</Nav.Link>
        <Nav.Link href="/client">Client</Nav.Link>
        <Nav.Link href="/board">Board</Nav.Link>
        <Nav.Link href="/logout">Logout</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}

export default NavbarAll;
