import React, { Component } from "react";
import TextEditor from "../TextEditor";
import "./styles.css";

export function BoardContainer(props) {
  return (
    <div className="card">
      <div>{props.children}</div>
      <div className="card">
        <button className="btn btn-sm btn-primary" onClick={props.addColumns}>
          Add Columns
        </button>
      </div>
    </div>
  );
}

export class Header extends Component {
  state = {
    boardName: "Board Name",
    users: ["user1", "user2", "user3"]
  };
  render() {
    return (
      <div className="header">
        <TextEditor />{" "}
        <button className="btn btn-primary">
          <i className="fa fa-star-o" />
        </button>
        <span style={{ color: "white", float: "right" }}>
          {" "}
          Users: {this.state.users}
          <button className="btn btn-success">invite</button>
        </span>
      </div>
    );
  }
}

export function Columns(props) {
  return (
    <div>
      {"column " + props.number}
      <button className="btn btn-warning">
        <i className="fa fa-plus" />
      </button>
      <div className="box">
        <Card />
      </div>
    </div>
  );
}

export function Card() {
  return (
    <div>
      <div className="flip">
        <div className="front">
          <h1 className="text-shadow">MOUNTAIN</h1>
        </div>
        <div className="back">
          <h2>Angular</h2>
          <p>
            Good tools make application development quicker and easier to
            maintain than if you did everything by hand..
          </p>
        </div>
      </div>
    </div>
  );
}

export function EmptyColumm() {
  return (
    <div>
      <p>
        click for new columm
        <button className="btn btn-warning">
          <i className="fa fa-plus" />
        </button>
      </p>
    </div>
  );
}
