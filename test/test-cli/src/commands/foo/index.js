// eslint-disable-next-line node/no-unpublished-require
const BaseIndexCommand = require('../../../../..') // index.js

class Foo extends BaseIndexCommand {
}

Foo.description = `Describe the command here
...
Extra documentation goes here
`

module.exports = Foo
