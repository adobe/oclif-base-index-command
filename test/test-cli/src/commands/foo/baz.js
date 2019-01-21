const {Command, flags} = require('@oclif/command')

class Baz extends Command {
  async run() {
    const {flags} = this.parse(Baz)
    const name = flags.name || 'world'
    this.log(`hello ${name} from ./src/commands/foo/baz.js`)
  }
}

Baz.description = `Describe the command here
...
Extra documentation goes here
`

Baz.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = Baz
