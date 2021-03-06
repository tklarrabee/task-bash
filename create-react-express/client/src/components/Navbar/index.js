import React, { Component } from "react";
import Navigate from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import API from "../../utils/user";

class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("loggin out");
    API.logout()
      .then(res => {
        console.log(res.data);
        if (res.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log("logout error");
        console.log(error);
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    // console.log('navbar props')
    // console.log(this.props);

    return (
      <div>
        <Navigate bg="dark" variant="dark">
          <Navigate.Brand href="#home">
            <img
              src="https://miro.medium.com/max/600/1*FEE98iWinlZBYkxBAG8MvA.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navigate.Brand>
          <Navigate.Brand href="/">Task-Bash</Navigate.Brand>

          {loggedIn ? (
            <Nav className="mr-auto">
              <Nav.Link href="/summary">Projects</Nav.Link>
              {/* <Nav.Link href="/board">Board</Nav.Link> */}
              {/* <Nav.Link href="/calendar">Calendar</Nav.Link> */}

              <Nav.Link to="/login" onClick={this.logout}>
                Logout
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="mr-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Create Account</Nav.Link>
            </Nav>
          )}
        </Navigate>
      </div>
    );
  }
}

export default Navbar;
