import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.css";
import Modal from "../components/Modal";
import Login from "../components/Login";
import CreateAccount from "../pages/CreateAccount";
import API from "../utils/user";
import "./styles.css";

class Welcome extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  state = {
    login: "",
    show: false,
    registerShow: false
  };

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  showRegister = e => {
    this.setState({
      registerShow: !this.state.registerShow
    });
  };

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

    return (
      <div className="body">
        <div className="site-section site-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-10">
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                  <span className="d-block mb-3 caption">
                    UCD coding bootcamp project #3 2019
                  </span>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce delay={400}>
                  <h1 className="d-block mb-4">Task Bash is here</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce delay={800}>
                  <span className="d-block mb-5 caption pl-lg-5">
                    Prioritizing, scheduling, and assigning tasks have never
                    been easier. Dynamic Request Forms ensure teams have every
                    project detail before they start working. Visualize
                    dependencies, identify conflicts, and easily reschedule
                    tasks with Task-Bash chart.
                  </span>

                  {loggedIn ? (
                    <div>
                      <a
                        href="/summary"
                        className="btn-custom"
                        onClick={e => {
                          this.showRegister();
                        }}
                      >
                        <span>Summary</span>
                      </a>
                      <a
                        to="/login"
                        className="btn-custom"
                        onClick={this.logout}
                      >
                        <span>Logout</span>
                      </a>
                    </div>
                  ) : (
                    <div>
                      <a
                    href="#popup"
                    className="btn-custom"
                    onClick={e => {
                      this.showRegister();
                    }}
                  >
                    <span>Get Started</span>
                  </a>
                  <a
                    href="#popup"
                    className="btn-custom"
                    onClick={e => {
                      this.showModal();
                    }}
                  >
                    <span>Log In</span>
                  </a>
                    </div>
                  )}

                  
                </ScrollAnimation>
                <Modal onClose={this.showModal} show={this.state.show}>
                  <Login 
                  updateUser={this.props.updateUser}/>
                </Modal>
                <Modal
                  onClose={this.showRegister}
                  show={this.state.registerShow}
                >
                  <CreateAccount />
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <div className="site-sction site-space">
          <Container>
            <ScrollAnimation animateIn="bounce" animateOnce>
              <Carousel>
                <Carousel.Item>
                  <img
                    widtch={500}
                    height={400}
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/52/87/8e/52878ebc087ea97731327ddd1842e0fc.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    widtch={500}
                    height={400}
                    className="d-block w-100"
                    src="https://i2.wp.com/gernotkapteina.com/wp-content/uploads/2015/11/pmback.png?fit=816%2C361&ssl=1"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </ScrollAnimation>
          </Container>
        </div>

        <div className="site-sction ">
          <div className="container">
            <ScrollAnimation animateIn="fadeIn" delay={300} animateOnce>
              <div className="row mb-5">
                <div className="col-lg-4">
                  <div className="site-section-heading">
                    <h2>Created by:</h2>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <div className="row align-items-center speaker">
              <div className="col-lg-6 mb-5 mb-lg-0">
                {/* <img src="images/person_1.jpg" alt="Image" className="img-fluid" /> */}
              </div>
              <div className="col-lg-6 ml-auto order-lg-1">
                <ScrollAnimation animateIn="fadeInLeft" delay={400} animateOnce>
                  <h3 className="text-white mb-4 name">Kim Helen</h3>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInLeft" delay={700} animateOnce>
                  <div className="bio pl-lg-5">
                    <span className="text-uppercase text-primary d-block mb-3">
                      Web Developer
                    </span>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus error deleniti dolores necessitatibus eligendi.
                      Nesciunt repellendus ab voluptatibus. Minima architecto
                      impedit eaque molestiae dicta quam. Cum ducimus. Culpa
                      distinctio aperiam
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            <div className="row align-items-center speaker">
              <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2">
                {/* <img src="images/person_2.jpg" alt="Image" class="img-fluid"/> */}
              </div>
              <div className="col-lg-6 ml-auto">
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={400}
                  animateOnce
                >
                  <h3 className="text-white mb-4 name">Israel Sanchez</h3>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={700}
                  animateOnce
                >
                  <div className="bio pr-lg-5">
                    <span className="text-uppercase text-primary d-block mb-3">
                      Web Developer
                    </span>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus error deleniti dolores necessitatibus eligendi.
                      Nesciunt repellendus ab voluptatibus. Minima architecto
                      impedit eaque molestiae dicta quam. Cum ducimus. Culpa
                      distinctio aperiam
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            <div className="row align-items-center speaker">
              <div className="col-lg-6 mb-5 mb-lg-0">
                {/* <img src="images/person_1.jpg" alt="Image" className="img-fluid" /> */}
              </div>
              <div className="col-lg-6 ml-auto">
                <ScrollAnimation animateIn="fadeInLeft" delay={400} animateOnce>
                  <h3 className="text-white mb-4 name">Tyler Larrabee</h3>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInLeft" delay={700} animateOnce>
                  <div className="bio pl-lg-5">
                    <span className="text-uppercase text-primary d-block mb-3">
                      Web Developer
                    </span>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus error deleniti dolores necessitatibus eligendi.
                      Nesciunt repellendus ab voluptatibus. Minima architecto
                      impedit eaque molestiae dicta quam. Cum ducimus. Culpa
                      distinctio aperiam
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            <div className="row align-items-center speaker">
              <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2">
                {/* <img src="images/person_2.jpg" alt="Image" class="img-fluid"/> */}
              </div>
              <div className="col-lg-6 ml-auto order-lg-1">
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={400}
                  animateOnce
                >
                  <h3 className="text-white mb-4 name">Chisoo Song</h3>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={700}
                  animateOnce
                >
                  <div className="bio pr-lg-5">
                    <span className="text-uppercase text-primary d-block mb-3">
                      Web Developer
                    </span>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus error deleniti dolores necessitatibus eligendi.
                      Nesciunt repellendus ab voluptatibus. Minima architecto
                      impedit eaque molestiae dicta quam. Cum ducimus. Culpa
                      distinctio aperiam
                    </p>
                  </div>
                </ScrollAnimation>
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
          </div>
        </div>
      </div>
    );
  }
}
export default Welcome;
