import React, { Component } from "react";
import { Header } from "../components/Boards";
import Board from 'react-trello'
import projectAPI from "../utils/project"

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '',
      cards: [
        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '',
      cards: []
    }
  ]
}

export default class App extends Component {
  render() {
    return (
      <div>
      <Header/>
    <Board data={data} draggable editable editLaneTitle canAddLanes/>
    </div>
    )
  }
}