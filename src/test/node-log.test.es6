import assert from 'assert';
import colors from '../lib/colors';

const testStr = 'test';

describe( 'node-log', function () {
  describe( 'log.normal', function () {
    it( 'Should be white color', function () {
      assert.equal( ...[
        colors.white( testStr ),
        '\u001b[37m' + testStr + '\u001b[39m'
      ] );
    } );
  } );

  describe( 'log.info', function () {
    it( 'Should be cyan color', function () {
      assert.equal( ...[
        colors.cyan( testStr ),
        '\u001b[36m' + testStr + '\u001b[39m'
      ] );
    } );
  } );

  describe( 'log.warn', function () {
    it( 'Should be yellow color', function () {
      assert.equal( ...[
        colors.yellow( testStr ),
        '\u001b[33m' + testStr + '\u001b[39m'
      ] );
    } );
  } );

  describe( 'log.success', function () {
    it( 'Should be green color', function () {
      assert.equal( ...[
        colors.green( testStr ),
        '\u001b[32m' + testStr + '\u001b[39m'
      ] );
    } );
  } );

  describe( 'log.error', function () {
    it( 'Should be red color', function () {
      assert.equal( ...[
        colors.red( testStr ),
        '\u001b[31m' + testStr + '\u001b[39m'
      ] );
    } );
  } );

  describe( 'log.custom', function () {
    it( 'Should be custom color', function () {
      assert.equal( ...[
        colors.white(testStr + colors.yellow(testStr)),
        '\u001b[37m' + testStr + '\u001b[33m' + testStr + '\u001b[39m' + '\u001b[39m'
      ] );
    } );
  } );

} );