'use strict';

var _nodeLog = require('../lib/node-log');

var _nodeLog2 = _interopRequireDefault(_nodeLog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testString = 'hello world!';

_nodeLog2.default.normal('%s', testString);
_nodeLog2.default.info('%s', testString);
_nodeLog2.default.warn('%s', testString);
_nodeLog2.default.success('%s', testString);
_nodeLog2.default.error('%s', testString);