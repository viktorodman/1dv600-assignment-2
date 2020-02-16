'use strict'

const Input = require('./Input')
const Game = require('./Game')

class TerminalHangman {
  constructor () {
    this._input = new Input()
    this._test = undefined
  }

  init () {
    this._input.on('menuchoice', (menuItem) => {
      console.clear()
      switch (menuItem) {
        case 'Play Game': this._launchGame()
          break
        case 'Change Settings': console.log('Show settings')
          break
        case 'Quit Game': console.log('Exit the game')
      }
    })
    this._input.getMenuInput()
  }

  _launchGame () {
    const game = new Game()
    game.startGame()
  }
}

module.exports = TerminalHangman
