import React from 'react'
import axios from 'axios'

export class Game extends React.Component {
  state = {
    "id": 1,
    "board": [
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
    ],
    "state": "new",
    "mines": 10,
    "difficulty": 0
  }
  
  render(){
    return (
      <div className="boardStructure">
    {this.state.board}
    </div>
    )
  }
}