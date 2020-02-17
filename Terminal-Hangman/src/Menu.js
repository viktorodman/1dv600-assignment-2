'use strict'

const Input = require('./Input')
const EvenEmitter = require('events')

class Menu extends EvenEmitter {
  constructor () {
    super()
    this._input = new Input()
    this._menuItems = ['Play Game', 'Change Settings', 'Quit Game']
    this._menuEvent = 'menuchoice'
    this._exitEvent = 'exitconfirmation'
  }

  listMenuItems () {
    this._input.on(this._menuEvent, (menuItem) => {
      console.clear()
      switch (menuItem) {
        case 'Play Game': this.emit('startgame')
          break
        case 'Change Settings': console.log('Show settings')
          break
        case 'Quit Game': this.quitGame()
      }

      this._input.removeAllListeners(this._menuEvent)
    })

    this._input.listItems('Welcome To Terminal Hangman!', 'menuitem', this._menuItems, this._menuEvent)
  }

  quitGame () {
    this._input.on(this._exitEvent, (confirmation) => {
      console.clear()
      if (confirmation) {
        console.log('exiting game')
      } else {
        this.listMenuItems()
      }
      this._input.removeAllListeners(this._exitEvent)
    })
    this._input.confirm('Are you sure you want to quit?', this._exitEvent)
  }
}

module.exports = Menu
