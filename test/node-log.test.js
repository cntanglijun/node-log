'use strict';

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testStr = 'test';
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

describe('node-log', function () {
  describe('log.normal', function () {
    it('Should be white color', function () {
      _assert2.default.equal(white[0] + testStr + white[1], '\u001b[37m' + testStr + '\u001b[39m');
    });
  });

  describe('log.info', function () {
    it('Should be cyan color', function () {
      _assert2.default.equal(cyan[0] + testStr + cyan[1], '\u001b[36m' + testStr + '\u001b[39m');
    });
  });

  describe('log.normal', function () {
    it('Should be yellow color', function () {
      _assert2.default.equal(yellow[0] + testStr + yellow[1], '\u001b[33m' + testStr + '\u001b[39m');
    });
  });

  describe('log.normal', function () {
    it('Should be green color', function () {
      _assert2.default.equal(green[0] + testStr + green[1], '\u001b[32m' + testStr + '\u001b[39m');
    });
  });

  describe('log.normal', function () {
    it('Should be red color', function () {
      _assert2.default.equal(red[0] + testStr + red[1], '\u001b[31m' + testStr + '\u001b[39m');
    });
  });
});