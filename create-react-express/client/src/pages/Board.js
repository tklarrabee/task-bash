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

export default class KanBan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: []
    }
  }

  getKanBan = project => {
    projectAPI.getBoard(project)
      .then(response => {
        console.log(response)
      })
  }
  componentDidMount() {
    console.log(this.props.match.params)
    this.getKanBan(this.props.match.params.id)
    // this.getKanBan(this.props.params.id)
  }


  render() {
    return (
      <div>
      <Header/>
    <Board data={data} draggable editable editLaneTitle canAddLanes/>
    </div>
    )
  }
}