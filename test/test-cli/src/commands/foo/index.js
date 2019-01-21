const {Command, flags} = require('@oclif/command')

class Foo extends Command {
  async run() {
    const {flags} = this.parse(Foo)
    const name = flags.name || 'world'
    this.log(`hello ${name} from ./src/commands/foo/index.js`)
  }
}

Foo.description = `Describe the command here
...
Extra documentation goes here
`

Foo.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = Foo
