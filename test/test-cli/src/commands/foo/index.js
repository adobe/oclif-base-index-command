// eslint-disable-next-line node/no-unpublished-require
const BaseIndexCommand = require('../../../../..') // index.js

class Foo extends BaseIndexCommand {
  async run() {
    this.log('hello world from ./src/commands/foo/index.js')
  }
}

Foo.description = `Describe the command here
...
Extra documentation goes here
`

module.exports = Foo
