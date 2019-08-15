import React, { Component } from "react";
import { BoardContainer, Header, Columns } from "../components/Boards";
import AppDragDrop from "../components/Clickanddrag";
// TODO: Set Kanban Card Element as Child Element to the Board

class Board extends Component {
  state = {
    numColumns: 0
  };

  onAddColumns = () => {
    this.setState({
      numColumns: this.state.numColumns + 1
    });
  };

  render() {
    const columns = [];

    for (let i = 0; i < this.state.numColumns; i += 1) {
      columns.push(<Columns key={i} number={i} />);
    }

    return (
      <div>
        {/* <NavbarAll /> */}
        <BoardContainer addColumns={this.onAddColumns}>
          <Header />
          <AppDragDrop />
          {columns}
        </BoardContainer>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default Board;
