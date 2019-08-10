import React, { Component } from "react";
import { Container, Header, Columm, Card, EmptyColumm } from "../components/Boards";
import AppDragDropDemo from "../components/Clickanddrag";
// TODO: Set Kanban Card Element as Child Element to the Board
class Board extends Component {
  state = {
    tasks: [
      { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
      { name: "React", category: "wip", bgcolor: "pink" },
      { name: "Vue", category: "complete", bgcolor: "skyblue" }
    ]
  };

  onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };

  onDragOver = ev => {
    ev.preventDefault();
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

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
          {t.name}
        </div>
      );
    });

    return (
      <div>
        <Container>
          <Header>Header</Header>
            < AppDragDropDemo/>
            < AppDragDropDemo/>
            < EmptyColumm/>
          {/* <EmptyColumm/> */}
          {/* <div className="box-2">Small Box 2</div>
          <div className="box-3">Small Box 3</div> */}
          {/* <div className="sidebar">Sidebar</div> */}
          {/* <div className="main-content">Main Content</div> */}
          {/* <div className="footer">Footer</div> */}
        </Container>
      </div>
    );
  }
}
export default Board;
