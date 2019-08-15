import React, { Component } from "react";
import Columns from "../Columns";
import TextEditor from "../TextEditor";
import "./styles.css";

const ParentComponent = props => (
  <div className="card calculator">
    <p><a href="#" onClick={props.addChild}>Add Another Child Component</a></p>
    <div id="children-pane">
      {props.children}
    </div>
  </div>
);

const ChildComponent = props => <div>{"I am child " + props.number}</div>;

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
    ],
    columns: [
      {
        name: "Column 1",
        category: "hello"
      },
      {
        name: "column 2",
        category: "world"
      }
    ],
    numChildren: 0
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

  onAddChild = e => {
    e.preventDefault();
    this.setState({
      numChildren: this.state.numChildren + 1
    });
  }


  render() {
    var tasks = {
      wip: [],
      complete: []
    };

    var columns = {
      hello: [],
      world: []
    };

    const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<ChildComponent key={i} number={i} />);
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

    this.state.columns.forEach(c => {
      columns[c.category].push(
        <div
          key={c.name}
          onDragStart={e => this.onDragStart(e, c.name)}
          draggable
          className="draggable"
        >
          <p>{c.name}</p>
        </div>
      );
    });

    return (
      <div className="container-drag">
        <div className="boardWrapper">
          {/* Column 1 */}
          <div
            className="wip"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => {
              this.onDrop(e, "wip");
            }}
          >
            <div className="colummContainer">
              <Columns>
                <TextEditor />
                {tasks.wip}
              </Columns>
            </div>
          </div>
          {/* Columns 2 */}
          <div
            className="droppable"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.onDrop(e, "complete")}
          >
            <div className="colummContainer">
              <Columns>
                <TextEditor />
                {tasks.complete}
              </Columns>
            </div>
          </div>
          {/* Columns 3 */}
          {/* <div
            className="droppable"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.onDrop(e, "world")}
          >
            <div className="colummContainer">
              <Columns>{columns.hello}</Columns>
            </div>
          </div> */}
          {/* Columns 4 */}
          {/* <div
            className="droppable"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.onDrop(e, "hello")}
          >
            <div className="colummContainer">
              <Columns>{columns.world}</Columns>
            </div>
          </div> */}
          {/* new columns creater */}
          <ParentComponent addChild={this.onAddChild}>
            {children}
          </ParentComponent>
          <div className="colummContainer newColumn">
            <p>click for new columm</p>
            <button className="btn btn-warning" onClick={this.handleNewColumns}>
              <i className="fa fa-plus" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
