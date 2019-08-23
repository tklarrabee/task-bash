import React, { Component } from "react";
import { Header } from "../components/Boards";
import Board from 'react-trello'
import projectAPI from "../utils/project"

// TODO
// translate between trello and current model values
// put get call into board
// 


// LaneCard.cards = function() {
//   for(this.cards.length)
// }

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


function LaneCard(id, title, label, cards) {
  this.id = id
  this.title = title
  this.label = JSON.stringify(label)
  this.cards = []
  this.formCards = function() {
    const shapedCards = []
    for(let i = 0; i < cards.length; i++){
      const card = {
        id: cards[i]._id ,
        title: cards[i].body,
        description: cards[i].body,
        label: cards[i].date,
        metadata: {user: cards[i].user}
      }
      shapedCards.push(card)
    }
    // console.log(shapedCards)
    return this.cards = shapedCards
  }
}

export default class KanBan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lanes: []
    }
    this.setEventBus =this.setEventBus.bind(this)
    this.getKanBan = this.getKanBan.bind(this)
  }

  setEventBus = eventBus => {
    this.setState({eventBus})
}

  getKanBan = project => {
    console.log(project)
    projectAPI.getBoard(project)
      .then(response => {
        const cols = response.data.columns
        const readyCols = []
        for( let i = 0; i < cols.length; i++ ) {
          const {_id, name, index,  elements} = cols[i]
          const formedCol = new LaneCard(_id, name, index,  elements)
          formedCol.formCards()
          readyCols.push(formedCol)
        }
        this.setState({lanes: readyCols})
        console.log(this.state.lanes)
      })
      .catch((err) => console.log(err))
  }
  
  async componentDidMount() {
    const projectId = this.props.match.params.id
    console.log(projectId)
    // await this.getKanBan(this.props.match.params.id)
    await this.getKanBan(projectId)
  }


  render() {
    return (
      <div>
      <Header/>
    <Board 
      data={{lanes: this.state.lanes}} 
      draggable 
      editable 
      editLaneTitle 
      canAddLanes 
      eventBusHandle={this.setEventBus}
      />
    </div>
    )
  }
}