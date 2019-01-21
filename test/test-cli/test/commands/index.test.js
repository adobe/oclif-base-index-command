const {expect, test} = require('@oclif/test')

describe('hello', () => {
  test
  .stdout()
  .command(['foo'])
  .it('runs foo', ctx => {
    expect(ctx.stdout).to.contain('index.js')
  })

  test
  .stdout()
  .command(['foo:bar'])
  .it('runs foo:bar', ctx => {
    expect(ctx.stdout).to.contain('bar.js')
  })

  test
  .stdout()
  .command(['foo bar'])
  .it('runs "foo bar" (space separated)', ctx => {
    expect(ctx.stdout).to.contain('bar.js')
  })

  test
  .stdout()
  .command(['foo:baz'])
  .it('runs foo:baz', ctx => {
    expect(ctx.stdout).to.contain('baz.js')
  })

  test
  .stdout()
  .command(['foo baz'])
  .it('runs "foo baz" (space separated)', ctx => {
    expect(ctx.stdout).to.contain('baz.js')
  })
})
