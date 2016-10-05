'use strict';

var _nodeLog = require('../lib/node-log');

var _nodeLog2 = _interopRequireDefault(_nodeLog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testString = 'hello world!';
var localDate = new Date().toLocaleString();

// Default
_nodeLog2.default.normal('Default\n-----');
_nodeLog2.default.normal('%s', testString);
_nodeLog2.default.info('%s', testString);
_nodeLog2.default.warn('%s', testString);
_nodeLog2.default.success('%s', testString);
_nodeLog2.default.error('%s', testString);
_nodeLog2.default.normal('-----\n');

// With time
_nodeLog2.default.normal('With time\n-----');
_nodeLog2.default.normal('%s %s', testString, localDate);
_nodeLog2.default.info('%s %s', testString, localDate);
_nodeLog2.default.warn('%s %s', testString, localDate);
_nodeLog2.default.success('%s %s', testString, localDate);
_nodeLog2.default.error('%s %s', testString, localDate);
_nodeLog2.default.normal('-----\n');

// Custom
_nodeLog2.default.normal('Custom\n-----');
_nodeLog2.default.custom.apply(_nodeLog2.default, ['%s %s %s %s %s'].concat([_nodeLog.colors.white(testString), _nodeLog.colors.cyan(testString), _nodeLog.colors.yellow(testString), _nodeLog.colors.green(testString), _nodeLog.colors.red(testString)]));
_nodeLog2.default.normal('-----\n');