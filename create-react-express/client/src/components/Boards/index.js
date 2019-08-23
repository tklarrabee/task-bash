import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'
// import projectAPI from '../../utils/project'
// import userAPI from '../../utils/user'
// import TextEditor from "../TextEditor";
import "./styles.css";

export function BoardContainer(props) {
  return (
    <div className="card">
      <div className="boardWrapper">{props.children}</div>
    </div>
  );
}

export class Header extends Component {
  state = {
    project: "",
    boardName: "",
    users: [],
    isInEditMode: false
  };

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
    console.log("should go to edit mode now");
  };

  updateComponentValue = () => {
    this.setState({
      isInEditMode: false,
      boardName: this.refs.theTextInput.value
    });
  };

  renderEditView = () => {
    return (
      <div>
        <input
          type="text"
          defaultValue={this.state.boardName}
          ref="theTextInput"
        />
        <button onClick={this.updateComponentValue}>OK</button>
        <button onClick={this.changeEditMode}>X</button>
      </div>
    );
  };

  renderDefaultView = () => {
    return (
      <div onDoubleClick={this.changeEditMode}>{this.state.boardName}</div>
    );
  };

  // componentDidMount = () => {
  //   projectAPI.
  // }

  render() {

    // const userId = this.props.userId
    
    return (
      <div className="header">
        <div className="plx-card silver">
          
          <div className="pxc-avatar">
            <img src="https://i.pinimg.com/originals/ab/eb/42/abeb4287590a49402d0b125a6dceebdb.jpg" alt="" />
          </div>
          <div className="pxc-subcard">
            <div className="pxc-title">
              {this.state.isInEditMode
                ? this.renderEditView()
                : this.renderDefaultView()}
            </div>
            <div className="pxc-sub">
              description
            </div>
            <div className="bottom-row">
              <div className="pxc-info">
                <div className="flags">
                  <span>
                    <img src="http://pollux.fun/images/flags/EN.png" alt=""/>
                  </span>
                  <span>
                    <img src="http://pollux.fun/images/flags/BR.png"alt="" />
                  </span>
                  <span>
                    <img src="http://pollux.fun/images/flags/FR.png" alt=""/>
                  </span>
                  <span>
                    <img src="http://pollux.fun/images/flags/TR.png" alt=""/>
                  </span>
                  <span>
                    <img src="http://pollux.fun/images/flags/JP.png" alt=""/>
                  </span>
                </div>
              </div>
              <div className="links">
                {/* <a className="shop" href="#">
                  <i className="fa fa-star-o"> </i>
                </a>
                <a className="shop" href="#">
                  <i className="fa fa-plus-circle"> </i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export function Columns(props) {
  return (
    <div className="columnContainer">
      {"column " + props.number}
      <button className="btn btn-warning" onClick={props.addCards}>
        <i className="fa fa-plus" />
      </button>
      <div className="box">{props.children}</div>
    </div>
  );
}

export function Cards() {
  return (
    <div>
      <div className="flip">
        <div className="front">
          <h1 className="text-shadow">Card</h1>
        </div>
        <div className="back">
          <h2>detail</h2>
          <p>context</p>
        </div>
      </div>
    </div>
  );
}

export function EmptyColumm(props) {
  return (
    <div className="columnContainer">
      click for new columm
      <button className="btn btn-warning" onClick={props.addColumns}>
        <i className="fa fa-plus" />
      </button>
      <div className="box" />
    </div>
  );
}
