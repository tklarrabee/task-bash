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
