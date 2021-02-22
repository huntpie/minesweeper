import React, { Component } from 'react'
import { Cell } from './components/Cell'
import { Game } from './components/Game'
import { Board } from './components/Board'


export class App extends Component {

  
handleClickFlag = () => {
  const flag = this.state
}

  
  
  render() {
    return (
    <main>
      <h1>Minesweeper</h1>
      <button className="newGame">New Game</button>
      <Game></Game>
    </main>
    )
  }
}
