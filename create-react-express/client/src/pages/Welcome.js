import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import "./styles.css";

class Welcome extends Component {
  state = {
    login: ""
  };
  render() {
    return (
      <div className="body">
        <div className="site-section site-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-10">
                <span className="d-block mb-3 caption">
                  UCD coding bootcamp project #3 2019
                </span>
                <h1 className="d-block mb-4">Task Bash is here</h1>
                <span className="d-block mb-5 caption">
                  created with lots of love
                </span>
                <a href="#" className="btn-custom">
                  <span>find more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="site-sction site-space">
          <Container>
            <Carousel>
              <Carousel.Item>
                <img
                  widtch={500}
                  Height={400}
                  className="d-block w-100"
                  src="https://i.pinimg.com/originals/52/87/8e/52878ebc087ea97731327ddd1842e0fc.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  widtch={500}
                  Height={400}
                  className="d-block w-100"
                  src="https://i2.wp.com/gernotkapteina.com/wp-content/uploads/2015/11/pmback.png?fit=816%2C361&ssl=1"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Container>
        </div>

        <div className="site-sction ">
          <div className="container">
            <div class="row mb-5">
              <div class="col-lg-4">
                <div class="site-section-heading">
                  <h2>Created by:</h2>
                </div>
              </div>
              <div class="col-lg-5 mt-5 pl-lg-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  error deleniti dolores necessitatibus eligendi.
                </p>
              </div>
            </div>

            <div className="row align-items-center speaker">
              <div className="col-lg-6 mb-5 mb-lg-0">
                {/* <img src="images/person_1.jpg" alt="Image" className="img-fluid" /> */}
              </div>
              <div className="col-lg-6 ml-auto order-lg-1">
                <h3 className="text-white mb-4 name">Helen Kim</h3>
                <div className="bio pl-lg-5">
                  <span className="text-uppercase text-primary d-block mb-3">
                    Web Designer
                  </span>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus error deleniti dolores necessitatibus eligendi.
                    Nesciunt repellendus ab voluptatibus. Minima architecto
                    impedit eaque molestiae dicta quam. Cum ducimus. Culpa
                    distinctio aperiam
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center speaker">
              <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2">
                {/* <img src="images/person_2.jpg" alt="Image" class="img-fluid"/> */}
              </div>
              <div className="col-lg-6 ml-auto">
                <h3 className="text-white mb-4 name">Israel Sanchez</h3>
                <div className="bio pr-lg-5">
                  <span className="text-uppercase text-primary d-block mb-3">
                    Web Designer
                  </span>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus error deleniti dolores necessitatibus eligendi.
                    Nesciunt repellendus ab voluptatibus. Minima architecto
                    impedit eaque molestiae dicta quam. Cum ducimus. Culpa
                    distinctio aperiam
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center speaker">
              <div className="col-lg-6 mb-5 mb-lg-0">
                {/* <img src="images/person_1.jpg" alt="Image" className="img-fluid" /> */}
              </div>
              <div className="col-lg-6 ml-auto">
                <h3 className="text-white mb-4 name">Tyler Larrabee</h3>
                <div className="bio pl-lg-5">
                  <span className="text-uppercase text-primary d-block mb-3">
                    Web Designer
                  </span>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus error deleniti dolores necessitatibus eligendi.
                    Nesciunt repellendus ab voluptatibus. Minima architecto
                    impedit eaque molestiae dicta quam. Cum ducimus. Culpa
                    distinctio aperiam
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center speaker">
              <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2">
                {/* <img src="images/person_2.jpg" alt="Image" class="img-fluid"/> */}
              </div>
              <div className="col-lg-6 ml-auto order-lg-1">
                <h3 className="text-white mb-4 name">Chisoo Song</h3>
                <div className="bio pr-lg-5">
                  <span className="text-uppercase text-primary d-block mb-3">
                    Web Designer
                  </span>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus error deleniti dolores necessitatibus eligendi.
                    Nesciunt repellendus ab voluptatibus. Minima architecto
                    impedit eaque molestiae dicta quam. Cum ducimus. Culpa
                    distinctio aperiam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-4 ">
                <div className="site-section-heading">
                  <h2>Created with:</h2>
                </div>
              </div>
            </div>
            <div className="row mb-5 list-inline-item dev-icons">
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <i className="fab fa-html5" />
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <i className="fab fa-css3-alt" />
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <i className="fab fa-js-square" />
              </div>

              <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <i className="fas fa-fire-alt" />
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <i className="fab fa-react" />
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <i className="fab fa-node" />
              </div>
            </div>

            <div className="row">
              <div className="col-12 text-center pt-5">
                <a href="#" className="btn-custom">
                  <span>Get started</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Welcome;
