import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  state = {
    login: ""
  };
  render() {
    return (
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sit amet vehicula ante. In vestibulum arcu arcu, aliquet
                fermentum nisi facilisis nec. Ut id ligula non arcu ultrices
                euismod facilisis eu sapien. Vivamus blandit placerat leo, sit
                amet facilisis felis condimentum eget.
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links">
                <li>
                  <a href="http://scanfcode.com/category/c-language/">C</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/">
                    UI Design
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/">
                    PHP
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/java-programming-language/">
                    Java
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/android/">Android</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/templates/">
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <a href="http://scanfcode.com/about/">About Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/">Contact Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contribute-at-scanfcode/">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2019 All Rights Reserved by
                <a href="#"> ME</a>.
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <a class="facebook" href="#">
                    <i class="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#">
                    <i class="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="#">
                    <i class="fa fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="#">
                    <i class="fa fa-linkedin" />
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
