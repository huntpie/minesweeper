import React from 'react'
import axios from 'axios'

export class Game extends React.Component {
  state = {
    id: 0,
    board: [
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", "", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
    ],
    state: "new",
    mines: 10,
    difficulty: 0
  }
  
  render(){

    const gameGrid = this.state.board.map((row, rowIndex) => {
      return row.map((cell, columnIndex) => {
          return <li className="cellLi" key={columnIndex}>{cell}</li>
        })
      
    })
    return (
      <ul className="boardStructure">
      {gameGrid}
      </ul>
    )
  }
}