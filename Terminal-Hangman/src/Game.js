'use strict'

const Input = require('./Input')
const EvenEmitter = require('events')

class Game extends EvenEmitter {
  constructor () {
    super()
    this._input = new Input()
    this._wordLists = ['Word List 1', 'Word List 2']
    this._wordListEvent = 'wordlistchoice'
    this._playerChoices = ['Enter Letter', 'Exit To Menu']
    this._playerChoiceEvent = 'playerinput'
    this._exitToMenuEvent = 'exitmenuconfirm'
  }

  init () {
    this._input.on(this._wordListEvent, (wordList) => {
      console.clear()
      // Generate Word From Word LIST
      this.startGame()
      this._input.removeAllListeners(this._wordListEvent)
    })
    this._input.listItems('Choose A Word List', 'wordlist', this._wordLists, this._wordListEvent)
  }

  startGame () {
    this._input.on(this._playerChoiceEvent, (playerChoice) => {
      console.clear()
      switch (playerChoice) {
        case 'Enter Letter': console.log('Will be added later')
          break
        case 'Exit To Menu' : this.exitToMenu()
      }
      this._input.removeAllListeners(this._playerChoiceEvent)
    })
    this._input.listItems('Player Input (CHANGE THIS)', 'playerchoice', this._playerChoices, this._playerChoiceEvent)
  }

  exitToMenu () {
    this._input.on(this._exitToMenuEvent, (confirmation) => {
      console.clear()
      if (confirmation) {
        this.emit('exittomenu')
      } else {
        this.startGame()
      }
      this._input.removeAllListeners(this._exitToMenuEvent)
    })
    this._input.confirm('Are you sure you want to exit?', this._exitToMenuEvent)
  }
}

module.exports = Game
