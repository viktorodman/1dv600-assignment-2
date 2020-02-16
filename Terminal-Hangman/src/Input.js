'use strict'
const EvenEmitter = require('events')
const inquirer = require('inquirer')

class Input extends EvenEmitter {
  constructor () {
    super()
    this._menuItems = {
      type: 'list',
      message: 'Welcome To Terminal Hangman!',
      name: 'menuitem',
      choices: ['Play Game', 'Change Settings', 'Quit Game']
    }
    this._wordLists = {
      type: 'list',
      message: 'Choose A Word List',
      name: 'wordlist',
      choices: ['Word List 1', 'Word List 2']
    }
  }

  async getMenuInput () {
    try {
      const answer = await inquirer.prompt([this._menuItems])
      this.emit('menuchoice', answer.menuitem)
    } catch (error) {
      console.error(error)
    }
  }

  async chooseWordList () {
    try {
      const answer = await inquirer.prompt([this._wordLists])
      this.emit('wordlistchoice', answer.wordlist)
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = Input
