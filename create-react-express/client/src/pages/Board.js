import React, { Component } from "react";
import {
  BoardContainer,
  Header,
  Columns,
  EmptyColumm,
  Cards
} from "../components/Boards";
import AppDragDrop from "../components/Clickanddrag";
// TODO: Set Kanban Card Element as Child Element to the Board

class Board extends Component {
  state = {
    numColumns: 0,
    numCards: 0,
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
    ]
  };

  onAddColumns = () => {
    this.setState({
      numColumns: this.state.numColumns + 1
    });
  };

  onAddCards = () => {
    this.setState({
      tasks: this.state.tasks + 1
    });
  };

  render() {
    var tasks = {
      wip: [],
      complete: []
    };
    const columns = [];
    const cards = [];

    for (let i = 0; i < this.state.numColumns; i += 1) {
      columns.push(
        <Columns addCards={this.onAddCards} key={i} number={i}>
          {tasks.wip}
          {cards}
        </Columns>
      );
    }

    for (let i = 0; i < this.state.numCards; i += 1) {
      cards.push(<Cards key={i} number={i} />);
    }

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
      <div>
        {/* <NavbarAll /> */}
        <Header />
        <BoardContainer>
          {columns}
          <EmptyColumm addColumns={this.onAddColumns} />
        </BoardContainer>
        <AppDragDrop />
        {/* <Footer /> */}
      </div>
    );
  }
}
export default Board;
