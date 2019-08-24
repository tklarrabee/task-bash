import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  state = {
    login: ""
  };
  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2019 All Rights Reserved by
                <a href="/"> Task-bash</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="/">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="/">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="/">
                    <i className="fab fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="/">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
