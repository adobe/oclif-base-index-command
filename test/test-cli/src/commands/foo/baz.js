const {Command} = require('@oclif/command')

class Baz extends Command {
  async run() {
    this.log('hello world from ./src/commands/foo/baz.js')
  }
}

Baz.description = `Describe the command here
...
Extra documentation goes here
`

module.exports = Baz
