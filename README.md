<!--
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
-->

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@adobe/oclif-base-index-command.svg)](https://npmjs.org/package/@adobe/oclif-base-index-command)
[![Downloads/week](https://img.shields.io/npm/dw/@adobe/oclif-base-index-command.svg)](https://npmjs.org/package/@adobe/oclif-base-index-command)
[![Build Status](https://travis-ci.org/adobe/oclif-base-index-command.svg?branch=master)](https://travis-ci.org/adobe/oclif-base-index-command)
[![Build status](https://ci.appveyor.com/api/projects/status/1pimm457lov4f1vr/branch/master?svg=true)](https://ci.appveyor.com/project/shazron/oclif-base-index-command/branch/master) [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![Greenkeeper badge](https://badges.greenkeeper.io/adobe/aio-cli-plugin-config.svg)](https://greenkeeper.io/)


oclif-base-index-command
=====================

Base oclif command for routing index.js  (to support subcommands with no colons).


## The Problem 

For example, if you have a command `foo` with topics (sub-commands) `bar` and `baz`:
```sh
src
├── commands
│   └── foo
│       ├── index.js
│       ├── bar.js
│       ├── baz.js
```

The topics `bar` and `baz` are called this way:
```sh
my-cli foo:bar
my-cli foo:baz
```

However, what if you want to call them this way?
```sh
my-cli foo bar
my-cli foo baz
```

`oclif` does not support this out of the box. 

This way of structuring sub-commands is important to support legacy CLIs so that they may be ported to `oclif`, and reduce friction for adoption.

## The Solution

First, add this package to your CLI repo:
```sh
npm install @adobe/oclif-base-index-command
```

In your `index.js` (see tree structure above), add `BaseIndexCommand` as your class' superclass:
```javascript
const BaseIndexCommand = require('@adobe/oclif-base-index-command')

class IndexCommand extends BaseIndexCommand {
  // don't override run(), let the superclass handle it
  // for the "no-colon" routing functionality
}

IndexCommand.description = `Your command's description here`


module.exports = IndexCommand
```

Now these commands will work without the colon topic separator:
```
my-cli foo bar
my-cli foo baz
```
