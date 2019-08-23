import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import * as legoData from "../../Animation/legoloading.json";
import * as doneData from "../../Animation/doneloading.json";

const loadingAnimation = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const doneAnimation2 = {
    loop: false,
    autoplay: true,
    animationData: doneData.default,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    }
 };

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: undefined,
      done: undefined
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          this.setState({ loading: true });
          setTimeout(() => {
            this.setState({ done: true });
          }, 1000);
        });
    }, 1200);
  }

  render() {
    return (
      <div>
        {!this.state.done ? (
          <FadeIn>
            <div class="d-flex justify-content-center align-items-center">
              {this.props.text}
              {!this.state.loading ? (
              <Lottie options={loadingAnimation} height={120} width={120} /> ) : (
                  <Lottie options={doneAnimation2} height={120} width={120} />
              )}
            </div>
          </FadeIn>
        ) : (
          <div>{this.props.children}</div>
        )}
      </div>
    );
  }
}
