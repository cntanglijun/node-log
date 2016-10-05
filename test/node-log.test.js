'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _colors = require('../lib/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testStr = 'test';

describe('node-log', function () {
  describe('log.normal', function () {
    it('Should be white color', function () {
      _assert2.default.equal.apply(_assert2.default, [_colors2.default.white(testStr), '\u001b[37m' + testStr + '\u001b[39m']);
    });
  });

  describe('log.info', function () {
    it('Should be cyan color', function () {
      _assert2.default.equal.apply(_assert2.default, [_colors2.default.cyan(testStr), '\u001b[36m' + testStr + '\u001b[39m']);
    });
  });

  describe('log.warn', function () {
    it('Should be yellow color', function () {
      _assert2.default.equal.apply(_assert2.default, [_colors2.default.yellow(testStr), '\u001b[33m' + testStr + '\u001b[39m']);
    });
  });

  describe('log.success', function () {
    it('Should be green color', function () {
      _assert2.default.equal.apply(_assert2.default, [_colors2.default.green(testStr), '\u001b[32m' + testStr + '\u001b[39m']);
    });
  });

  describe('log.error', function () {
    it('Should be red color', function () {
      _assert2.default.equal.apply(_assert2.default, [_colors2.default.red(testStr), '\u001b[31m' + testStr + '\u001b[39m']);
    });
  });

  describe('log.custom', function () {
    it('Should be custom color', function () {
      _assert2.default.equal.apply(_assert2.default, [_colors2.default.white(testStr + _colors2.default.yellow(testStr)), '\u001b[37m' + testStr + '\u001b[33m' + testStr + '\u001b[39m' + '\u001b[39m']);
    });
  });
});