'use strict'

const Input = require('./Input')

class Game {
  constructor () {
    this._input = new Input()
  }

  startGame () {
    this._input.on('wordlistchoice', (wordList) => {
      console.clear()
      switch (wordList) {
        case 'Word List 1': console.log('Word List 1 Choosen!')
          break
        case 'Word List 2': console.log('Word List 1 Choosen!')
      }
    })
    this._input.chooseWordList()
  }
}

module.exports = Game
