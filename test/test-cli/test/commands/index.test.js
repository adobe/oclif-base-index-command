const {expect, test} = require('@oclif/test')
const path = require('path')
const root = path.join(__dirname, '../..')

describe('hello', () => {
  test
  .loadConfig({root})
  .stdout()
  .command(['foo'])
  .catch('Missing 1 required arg:\nsub-command\nSee more help with --help')
  .it('runs foo', ctx => {
    // eslint-disable-next-line no-unused-expressions
    expect(ctx.stdout).to.exist
  })

  test
  .loadConfig({root})
  .stdout()
  .command(['foo:bar'])
  .it('runs foo:bar', ctx => {
    expect(ctx.stdout).to.contain('bar.js')
  })

  test
  .loadConfig({root})
  .stdout()
  .command(['foo', 'bar'])
  .it('runs "foo bar" (space separated)', ctx => {
    expect(ctx.stdout).to.contain('bar.js')
  })

  test
  .loadConfig({root})
  .stdout()
  .command(['foo:baz'])
  .it('runs foo:baz', ctx => {
    expect(ctx.stdout).to.contain('baz.js')
  })

  test
  .loadConfig({root})
  .stdout()
  .command(['foo', 'baz'])
  .it('runs "foo baz" (space separated)', ctx => {
    expect(ctx.stdout).to.contain('baz.js')
  })
})
