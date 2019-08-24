import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import API from "../../utils/user";
import Card from "react-bootstrap/Card";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    API.login(user)
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username,
            id: response.data.id
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;

    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else if (loggedIn) {
      return <Redirect to="/summary" />;
    } else {
      return (
        <div>
          <Card.Header>Login:</Card.Header>
          <Card.Body>
            <Card.Title>
              <Form>
                <Form.Group>
                  <Form.Label>User Name:</Form.Label>
                  <Form.Control
                    className="form-input"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="form-input"
                    placeholder="password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  {/* <input
                      className="form-input"
                      placeholder="password"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    /> */}
                </Form.Group>
                <Form.Group>
                  <Button
                    variant="dark"
                    onClick={this.handleSubmit}
                    type="submit"
                  >
                    Login
                  </Button>
                  </Form.Group>
              </Form>
            </Card.Title>
          </Card.Body>
        </div>
      );
    }
  }
}

export default Login;
