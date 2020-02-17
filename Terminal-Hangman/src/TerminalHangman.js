'use strict'

const Game = require('./Game')
const Menu = require('./Menu')

class TerminalHangman {
  constructor () {
    this._menu = new Menu()
  }

  init () {
    this._menu.on('startgame', () => {
      this._launchGame()
      this._menu.removeAllListeners('startgame')
    })
    this._menu.listMenuItems()
  }

  _launchGame () {
    const game = new Game()
    game.on('exittomenu', () => {
      this.init()
      game.removeAllListeners('exittomenu')
    })
    game.init()
  }
}

module.exports = TerminalHangman
