import React, { Component } from "react";
import TextEditor from "../TextEditor";
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
    boardName: "Board Name",
    users: ["user1", "user2", "user3"],
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

  render() {
    return (
      <div>
        <div className="plx-card silver">
          <div
            className="pxc-bg"
            style={{
              backgroundImage: `url(https://i.gyazo.com/a846fc87cca5ebd3942ae1e038bb5083.png)`
            }}
          >
            {" "}
          </div>
          <div className="pxc-avatar">
            <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/GB/en/999/EP4312-CUSA07658_00-AV00000000000049/1536930670000/image?w=240&amp;h=240&amp;bg_color=000000&amp;opacity=100&amp;_version=00_09_000" />
          </div>
          <div className="pxc-stopper"> </div>
          <div className="pxc-subcard">
            <div className="pxc-title">
              {this.state.isInEditMode
                ? this.renderEditView()
                : this.renderDefaultView()}
            </div>
            <div className="pxc-sub">
              This probably should be called tagline instead
            </div>
            <div className="bottom-row">
              <div className="pxc-info">
                <div className="flags">
                  <span>
                    <img src="http://pollux.fun/images/flags/EN.png" />
                  </span>
                  <span>
                    <img src="http://pollux.fun/images/flags/BR.png" />
                  </span>
                  <span>
                    <img src="http://pollux.fun/images/flags/FR.png" />
                  </span>
                  <span>
                    <img src="http://pollux.fun/images/flags/TR.png" />
                  </span>
                  <span>
                    <img src="http://pollux.fun/images/flags/JP.png" />
                  </span>
                </div>
              </div>
              <div className="links">
                <a className="shop">
                  <i className="fas fa-shopping-bag"> </i>
                </a>
                <a className="shop">
                  <i className="fas fa-shopping-bag"> </i>
                </a>
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
