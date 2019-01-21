const {Command} = require('@oclif/command')

class Bar extends Command {
  async run() {
    this.log('hello world from ./src/commands/foo/bar.js')
  }
}

Bar.description = `Describe the command here
...
Extra documentation goes here
`

module.exports = Bar
