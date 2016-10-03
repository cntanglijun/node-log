import 'babel-polyfill';
import util from 'util';

const { white, cyan, yellow, green, red } = util.inspect.colors;

[ white, cyan, yellow, green, red ].forEach( color => {
  color[ 0 ] = '\u001b[' + color[ 0 ] + 'm';
  color[ 1 ] = '\u001b[' + color[ 1 ] + 'm';
} );

class Log {
  normal( str, ...args ) {
    this::console.log( white[ 0 ] + str + white[ 1 ], ...args );
  }

  info( str, ...args ) {
    this::console.log( cyan[ 0 ] + str + cyan[ 1 ], ...args );
  }

  warn( str, ...args ) {
    this::console.log( yellow[ 0 ] + str + yellow[ 0 ], ...args );
  }

  success( str, ...args ) {
    this::console.log( green[ 0 ] + str + green[ 1 ], ...args );
  }

  error( str, ...args ) {
    this::console.log( red[ 0 ] + str + red[ 1 ], ...args );
  }
}

export default new Log();