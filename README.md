# node-log

[![node](https://img.shields.io/node/v/node-log.js.svg)](https://github.com/cntanglijun/node-log)
[![npm](https://img.shields.io/npm/v/node-log.js.svg)](https://www.npmjs.com/package/node-log.js)
[![npm](https://img.shields.io/npm/dt/node-log.js.svg)](https://github.com/cntanglijun/node-log.js)
[![GitHub tag](https://img.shields.io/github/tag/cntanglijun/node-log.svg)](https://github.com/cntanglijun/node-log.js/tags)
[![GitHub release](https://img.shields.io/github/release/cntanglijun/node-log.svg)](https://github.com/cntanglijun/node-log.js/releases)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/cntanglijun/node-log.js/master/LICENSE.md)

Let console.log in nodejs with colors

## Screenshot

[![screenshot](./asset/screenshot.png)](https://github.com/cntanglijun/node-log.js)

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
log.custom(testStr);
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