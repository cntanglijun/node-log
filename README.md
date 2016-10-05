# node-log

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/cntanglijun/node-log/master/LICENSE.md)
[![npm](https://img.shields.io/npm/v/node-log.js.svg?maxAge=2592000)](https://www.npmjs.com/package/node-log.js)
[![GitHub tag](https://img.shields.io/github/tag/cntanglijun/node-log.svg?maxAge=2592000)](https://github.com/cntanglijun/node-log/tags)
[![GitHub release](https://img.shields.io/github/release/cntanglijun/node-log.svg?maxAge=2592000)](https://github.com/cntanglijun/node-log/releases)
[![node](https://img.shields.io/node/v/node-log.js.svg?maxAge=2592000)](https://github.com/cntanglijun/node-log)

Let console.log in nodejs with colors

## Installation

```bash
npm i node-log --save
```

## Usage

```js
const log = require('node-log');

const testStr = 'hello world!'

log.normal(testStr);
log.info(testStr);
log.warn(testStr);
log.success(testStr);
log.error(testStr);
```

## API

| API | Utility |
|:-:|:-:|
| log.normal | output with white color |
| log.info | output with cyan color |
| log.warn | output with yellow color |
| log.success | output with green color |
| log.error | output with red color |
| log.custom | wrapper for log.normal |

## Example

```bash
npm run example
```

## License

MIT