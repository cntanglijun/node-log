'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _lodash = require('lodash.clonedeep');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.mapvalues');

var _lodash4 = _interopRequireDefault(_lodash3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colors = (0, _lodash4.default)((0, _lodash2.default)(_util2.default.inspect.colors), function (color) {
  return function (str) {
    return '\u001b[' + color[0] + 'm' + str + '\u001b[' + color[1] + 'm';
  };
});

exports.default = colors;