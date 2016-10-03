import util from 'util';
import assert from 'assert';

const testStr = 'test';
const { white, cyan, yellow, green, red } = util.inspect.colors;

[ white, cyan, yellow, green, red ].forEach( color => {
  color[ 0 ] = '\u001b[' + color[ 0 ] + 'm';
  color[ 1 ] = '\u001b[' + color[ 1 ] + 'm';
} );

describe( 'node-log', function () {
  describe( 'log.normal', function () {
    it( 'Should be white color', function () {
      assert.equal(white[0] + testStr + white[1], '\u001b[37m' + testStr + '\u001b[39m');
    } );
  } );

  describe( 'log.info', function () {
    it( 'Should be cyan color', function () {
      assert.equal(cyan[0] + testStr + cyan[1], '\u001b[36m' + testStr + '\u001b[39m');
    } );
  } );

  describe( 'log.normal', function () {
    it( 'Should be yellow color', function () {
      assert.equal(yellow[0] + testStr + yellow[1], '\u001b[33m' + testStr + '\u001b[39m');
    } );
  } );

  describe( 'log.normal', function () {
    it( 'Should be green color', function () {
      assert.equal(green[0] + testStr + green[1], '\u001b[32m' + testStr + '\u001b[39m');
    } );
  } );

  describe( 'log.normal', function () {
    it( 'Should be red color', function () {
      assert.equal(red[0] + testStr + red[1], '\u001b[31m' + testStr + '\u001b[39m');
    } );
  } );

} );