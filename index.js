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

const { Command, run } = require('@oclif/command')

// ****************************************************************************
//
// This will support the "old" way of routing commands
// where the subcommand follows the command, as well as the new way with topics:
// i.e.
//    .bin/run helix demo arg1 arg2 arg3
// It will concatenate the command and subcommand and re-run the command:
// i.e.
//    bin/run helix:demo arg1 arg2 arg3
//
// You would only process the arguments on the 'index' command that has
// subcommands under it
//
// ****************************************************************************
const processArguments = (...rest) => {
  if (process.argv[2].indexOf(':') > -1) {
    return run.apply(null, ...rest)
  }

  let cmd = `${process.argv[2]}:${process.argv[3]}`
  process.argv = [].concat(process.argv.slice(0, 2), [cmd], process.argv.slice(4))
  return run.apply(null, ...rest)
}

class BaseIndexCommand extends Command {
  // ****************************************************************************
  //
  // Update the run() command to:
  // 1. First parse the args/flags (to let the argument validation kick in, need
  // at least one sub-command)
  // 2. Call and return the `processArguments` function that will do the routing
  //
  // The subclass *SHOULD NOT* implement run()
  //
  // ****************************************************************************
  async run () {
    this.parse(BaseIndexCommand) // need `parse` to trigger args check
    return processArguments(arguments)
  }
}

// ****************************************************************************
//
// This is for requiring at least one arg (the subcommand)
//
// ****************************************************************************
BaseIndexCommand.args = [
  {
    name: 'sub-command',
    required: true
  }
]

// ****************************************************************************
//
// this is needed to support variable argument passing to sub-commands
// (turns off argument validation, arg length check etc)
//
// ****************************************************************************
BaseIndexCommand.strict = false

module.exports = BaseIndexCommand
