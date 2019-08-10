import React, { Component } from "react";
import "./styles.css";

export default class AppDragDrop extends Component {
  state = {
    tasks: [
      {
        name: "Yellow",
        category: "wip",
        context: "hello, I am yellow",
        bgcolor: "yellow"
      },
      {
        name: "Pink",
        category: "wip",
        context: "hello, I am pink",
        bgcolor: "pink"
      },
      {
        name: "Skyblue",
        category: "complete",
        context: "hello, I am skyblue",
        bgcolor: "skyblue"
      },
      {
        name: "Whitesmoke",
        category: "complete",
        context: "hello, I am Whitesmoke",
        bgcolor: "Whitesmoke"
      },
      {
        name: "Orange",
        category: "complete",
        context: "hello, I am Orange",
        bgcolor: "Orange"
      }
    ]
  };

  onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("text/plain", id);
  };

  onDragOver = ev => {
    ev.preventDefault();
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("text");

    let tasks = this.state.tasks.filter(task => {
      if (task.name === id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks
    });
  };

  render() {
    var tasks = {
      wip: [],
      complete: []
    };

    this.state.tasks.forEach(t => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={e => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
          style={{ backgroundColor: t.bgcolor }}
        >
          <p>{t.name}</p>
          <p>{t.context}</p>
        </div>
      );
    });

    return (
      <div className="container-drag">
        <div className="boardWrapper">
          <div
            className="wip"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => {
              this.onDrop(e, "wip");
            }}
          >
            <div className="colummContainer">
              <span>Columm 1</span>
              {tasks.wip}
            </div>
          </div>
          <div
            className="droppable"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.onDrop(e, "complete")}
          >
            <div className="colummContainer">
              <span>Columm 2</span>
              {tasks.complete}
            </div>
          </div>
          <div className="colummContainer newColumn">
            <p>
              click for new columm
            </p>
              <button class="btn btn-warning">
                <i class="fa fa-plus" />
              </button>
          </div>
        </div>
      </div>
    );
  }
}
