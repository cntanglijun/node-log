import util from 'util';
import cloneDeep from 'lodash.clonedeep';
import mapValues from 'lodash.mapvalues';

const colors = mapValues( cloneDeep( util.inspect.colors ), color => {
  return str => {
    return '\u001b[' + color[ 0 ] + 'm' + str + '\u001b[' + color[ 1 ] + 'm';
  }
} );

export default colors;