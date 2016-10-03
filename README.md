# node-log
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/cntanglijun/node-log/master/LICENSE.md)
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

| API | utility |
|:-:|:-:|
| log.normal | output with white color |
| log.info | output with cyan color |
| log.warn | output with yellow color |
| log.success | output with green color |
| log.error | output with red color |

## Example

```bash
npm run example
```

## License

MIT