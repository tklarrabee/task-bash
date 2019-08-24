import React, { Component } from "react";
import { Header } from "../components/Boards";
import Board from 'react-trello'
import projectAPI from "../utils/project"

// TODO
// translate between trello and current model values
// put get call into board
// 

const handleLaneDragEnd = (removeIndex, addIndex, payload) => {
  console.log(`Lane Drag End`)
  console.log(`remove index ${removeIndex}`)
  console.log(`add index ${addIndex}`)
  console.log(payload)
}

const handleDragStart = (cardId, laneId) => {
  console.log('drag started')
  console.log(`cardId: ${cardId}`)
  console.log(`laneId: ${laneId}`)
}

const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
  console.log('drag ended')
  console.log(`cardId: ${cardId}`)
  console.log(`sourceLaneId: ${sourceLaneId}`)
  console.log(`targetLaneId: ${targetLaneId}`)
  if(sourceLaneId !== targetLaneId) {

    const movement = {
      cards: [cardId],
      column: sourceLaneId,
      newColumn: targetLaneId
    }
    projectAPI.moveCard(movement)
      .then((err, res) => {
        if (err) console.log(err)
        else console.log(res)
      })
  }
}

const lanePop = (cols) => {
  const readyCols = []
  for (let i = 0; i < cols.length; i++) {
    const { _id, name, index, elements } = cols[i]
    const formedCol = new LaneCard(_id, name, index, elements)
    formedCol.formCards()
    readyCols.push(formedCol)
  }
  let laneTot = readyCols.length
  // this.setState({total: laneTot})
  return { columns: readyCols, total: laneTot }
}



function LaneCard(id, title, label, cards) {
  this.id = id
  this.laneId = id
  this.title = title
  this.label = JSON.stringify(label)
  this.cards = cards
  this.formCards = function () {
    if (cards) {
      const shapedCards = []
      for (let i = 0; i < cards.length; i++) {
        const card = {
          id: cards[i]._id,
          cardId: cards[i]._id,
          title: cards[i].title,
          description: cards[i].body,
          label: cards[i].label,
          metadata: { user: cards[i].user }
        }
        shapedCards.push(card)
      }
      // console.log(shapedCards)
      return this.cards = shapedCards
    }
    else return this.cards = []
  }
}

export default class KanBan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lanes: [],
      total: 0
    }
    this.setEventBus = this.setEventBus.bind(this)
    this.getKanBan = this.getKanBan.bind(this)
    this.onLaneAdd = this.onLaneAdd.bind(this)
    this.onCardAdd = this.onCardAdd.bind(this)
    this.shouldReceiveNewData = this.shouldReceiveNewData.bind(this)
    this.onCardDelete = this.onCardDelete.bind(this)
  }

  setEventBus = eventBus => {
    this.setState({ eventBus })
  }

  getKanBan = project => {
    // console.log(project)
    projectAPI.getBoard(project)
      .then(response => {
        const cols = response.data.columns
        const readyCols = []
        for (let i = 0; i < cols.length; i++) {
          const { _id, name, index, elements } = cols[i]
          const formedCol = new LaneCard(_id, name, index, elements)
          formedCol.formCards()
          readyCols.push(formedCol)
        }
        let laneTot = readyCols.length
        this.setState({ lanes: readyCols, total: laneTot })
        console.log(this.state)
      })
      .catch((err) => console.log(err))
  }

  async componentDidMount() {
    const projectId = this.props.match.params.id
    // console.log(projectId)
    // await this.getKanBan(this.props.match.params.id)
    await this.getKanBan(projectId)
  }

  onLaneAdd = (data, id) => {
    console.log(data, id)
    let index = parseInt(this.state.total) + 1
    const column = { name: data.title, project: this.props.match.params.id, index: index }
    console.log(column)
    projectAPI.newColumn(column)
      .then((res) => {
        const laneInfo = lanePop(res.data.columns)
        console.log(laneInfo)
        let lanes = laneInfo.columns
        let total = laneInfo.total
        // console.log(res)
        this.state.eventBus.publish({
          type: 'UPDATE_LANES',
          lanes: lanes
        })
        this.setState({ total: total })


      })
  }

  onLaneDelete = (laneId) => {
    const column = { id: laneId }

    projectAPI.deleteCol(column)
      .then((res => console.log(res)))
  }

  onCardDelete = (card, laneId) => {
    console.log(card)

    const request = {
      id: card,
      column: laneId
    }
    projectAPI.deleteCard(request)
      .then( res => console.log('THE FORKING DELETE RESPONSE' , res) )

      this.state.eventBus.publish({
        type: 'REMOVE_CARD', 
        laneId: laneId, 
        cardId: card
      })
  }

  onCardAdd = (card, laneId) => {
    const formCard = {
      body: card.description,
      title: card.title,
      label: card.label,
      column: laneId
    }
    projectAPI.newCard(formCard)
    console.log(card)
  }

  shouldReceiveNewData = nextData => {
    console.log('New card has been added')
    console.log(nextData)
  }

  //   completeCard = () => {
  //     this.state.eventBus.publish({
  //         type: 'ADD_CARD',
  //         laneId: 'COMPLETED',
  //         card: {id: 'Milk', title: 'Buy Milk', label: '15 mins', description: 'Use Headspace app'}
  //     })
  //     this.state.eventBus.publish({type: 'REMOVE_CARD', laneId: 'PLANNED', cardId: 'Milk'})
  // }


  render() {
    return (
      <div>
        {/* <Header /> */}
        <Board
          data={{ lanes: this.state.lanes }}
          draggable
          editable
          editLaneTitle
          canAddLanes
          eventBusHandle={this.setEventBus}
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
          handleLaneDragEnd={handleLaneDragEnd}
          onLaneAdd={this.onLaneAdd}
          onDataChange={this.shouldReceiveNewData}
          onCardAdd={this.onCardAdd}
          onCardDelete={this.onCardDelete}
          onLaneDelete={this.onLaneDelete}
        />
      </div>
    )
  }
}