'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

      (_console$log = console.log).call.apply(_console$log, [this, _colors2.default.white(str)].concat(args));
    }
  }, {
    key: 'info',
    value: function info(str) {
      var _console$log2;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      (_console$log2 = console.log).call.apply(_console$log2, [this, _colors2.default.cyan(str)].concat(args));
    }
  }, {
    key: 'warn',
    value: function warn(str) {
      var _console$log3;

      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      (_console$log3 = console.log).call.apply(_console$log3, [this, _colors2.default.yellow(str)].concat(args));
    }
  }, {
    key: 'success',
    value: function success(str) {
      var _console$log4;

      for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      (_console$log4 = console.log).call.apply(_console$log4, [this, _colors2.default.green(str)].concat(args));
    }
  }, {
    key: 'error',
    value: function error(str) {
      var _console$log5;

      for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }

      (_console$log5 = console.log).call.apply(_console$log5, [this, _colors2.default.red(str)].concat(args));
    }
  }, {
    key: 'custom',
    value: function custom(str) {
      for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        args[_key6 - 1] = arguments[_key6];
      }

      this.normal.apply(this, [str].concat(args));
    }
  }]);

  return Log;
}();

exports.default = new Log();
exports.colors = _colors2.default;