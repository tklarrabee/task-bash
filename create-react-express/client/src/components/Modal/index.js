import React, { Component } from "react";
import "./styles.css";
import PropTypes from "prop-types";
import Login from "../Login";

class Modal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  };
  render() {
    if (!this.props.show) {
      return null;
    }
  return (
    <div>
      <div className="popup" id="popup">
        <div className="popup-inner">
          <div className="popup__photo">
            <img
              src="https://i0.wp.com/passionpassport.com/wp-content/uploads/2017/11/iceland-photog-guidekai-grossman-wildlicht-480x600.jpg?resize=480%2C600"
              alt=""
            />
          </div>
          <div className="popup__contents">
            {this.props.children}
          </div>
          <a className="popup__close" onClick={this.onClose}>
            X
          </a>
        </div>
      </div>
    </div>
  );
}
}

export default Modal;
