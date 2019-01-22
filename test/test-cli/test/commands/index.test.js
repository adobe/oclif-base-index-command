/*
 * Copyright 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const {expect, test} = require('@oclif/test')
const path = require('path')
const root = path.join(__dirname, '../..')

describe('test-cli for oclif-base-index-command', () => {
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
    expect(ctx.stdout).to.contain('hello world from foo:bar subcommand.')
  })

  test
  .loadConfig({root})
  .stdout()
  .command(['foo', 'bar'])
  .it('runs "foo bar" (space separated)', ctx => {
    expect(ctx.stdout).to.contain('hello world from foo:bar subcommand.')
  })

  test
  .loadConfig({root})
  .stdout()
  .command(['foo:baz'])
  .it('runs foo:baz', ctx => {
    expect(ctx.stdout).to.contain('hello world from foo:baz subcommand.')
  })

  test
  .loadConfig({root})
  .stdout()
  .command(['foo', 'baz'])
  .it('runs "foo baz" (space separated)', ctx => {
    expect(ctx.stdout).to.contain('hello world from foo:baz subcommand.')
  })
})
