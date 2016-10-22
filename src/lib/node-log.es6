import colors from './colors';

class Log {
  normal( str, ...args ) {
    this::console.log( colors.white( str ), ...args );
  }

  info( str, ...args ) {
    this::console.log( colors.cyan( str ), ...args );
  }

  warn( str, ...args ) {
    this::console.log( colors.yellow( str ), ...args );
  }

  success( str, ...args ) {
    this::console.log( colors.green( str ), ...args );
  }

  error( str, ...args ) {
    this::console.log( colors.red( str ), ...args );
  }

  custom( str, ...args ) {
    this.normal( str, ...args );
  }
}

export default new Log();
export { colors };