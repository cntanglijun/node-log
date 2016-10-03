'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _util$inspect$colors = _util2.default.inspect.colors;
var white = _util$inspect$colors.white;
var cyan = _util$inspect$colors.cyan;
var yellow = _util$inspect$colors.yellow;
var green = _util$inspect$colors.green;
var red = _util$inspect$colors.red;


[white, cyan, yellow, green, red].forEach(function (color) {
  color[0] = '\u001b[' + color[0] + 'm';
  color[1] = '\u001b[' + color[1] + 'm';
});

var Log = function () {
  function Log() {
    _classCallCheck(this, Log);
  }

  _createClass(Log, [{
    key: 'normal',
    value: function normal(str) {
      var _console$log;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_console$log = console.log).call.apply(_console$log, [this, white[0] + str + white[1]].concat(args));
    }
  }, {
    key: 'info',
    value: function info(str) {
      var _console$log2;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      (_console$log2 = console.log).call.apply(_console$log2, [this, cyan[0] + str + cyan[1]].concat(args));
    }
  }, {
    key: 'warn',
    value: function warn(str) {
      var _console$log3;

      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      (_console$log3 = console.log).call.apply(_console$log3, [this, yellow[0] + str + yellow[0]].concat(args));
    }
  }, {
    key: 'success',
    value: function success(str) {
      var _console$log4;

      for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      (_console$log4 = console.log).call.apply(_console$log4, [this, green[0] + str + green[1]].concat(args));
    }
  }, {
    key: 'error',
    value: function error(str) {
      var _console$log5;

      for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }

      (_console$log5 = console.log).call.apply(_console$log5, [this, red[0] + str + red[1]].concat(args));
    }
  }]);

  return Log;
}();

exports.default = new Log();