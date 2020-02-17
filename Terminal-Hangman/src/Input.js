'use strict'
const EvenEmitter = require('events')
const inquirer = require('inquirer')

class Input extends EvenEmitter {
  constructor () {
    super()
    this._questionList = {
      type: 'list',
      message: '',
      name: '',
      choices: [],
      prefix: ''
    }
    this._confirmList = {
      type: 'confirm',
      name: 'confirmation',
      message: '',
      prefix: ''
    }
  }

  async confirm (message, event) {
    try {
      this._confirmList.message = message

      const answer = await inquirer.prompt([this._confirmList])
      this.emit(event, answer.confirmation)
    } catch (error) {
      console.error(error)
    }
  }

  async listItems (message, name, choices, event) {
    try {
      this._questionList.message = message
      this._questionList.name = name
      this._questionList.choices = choices

      const answer = await inquirer.prompt([this._questionList])
      this.emit(event, answer[name])
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = Input
