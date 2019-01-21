const {Command, flags} = require('@oclif/command')

class Bar extends Command {
  async run() {
    const {flags} = this.parse(Bar)
    const name = flags.name || 'world'
    this.log(`hello ${name} from ./src/commands/foo/bar.js`)
  }
}

Bar.description = `Describe the command here
...
Extra documentation goes here
`

Bar.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = Bar
