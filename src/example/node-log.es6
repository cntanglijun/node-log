import log, { colors } from '../lib/node-log';

const testString = 'hello world!';
const localDate = new Date().toLocaleString();

// Default
log.normal('Default\n-----')
log.normal('%s', testString);
log.info('%s', testString);
log.warn('%s', testString);
log.success('%s', testString);
log.error('%s', testString);
log.normal('-----\n');

// With time
log.normal('With time\n-----');
log.normal('%s %s', testString, localDate);
log.info('%s %s', testString, localDate);
log.warn('%s %s', testString, localDate);
log.success('%s %s', testString, localDate);
log.error('%s %s', testString, localDate);
log.normal('-----\n');

// Custom
log.normal('Custom\n-----');
log.custom('%s %s %s %s %s', ...[
  colors.white(testString),
  colors.cyan(testString),
  colors.yellow(testString),
  colors.green(testString),
  colors.red(testString)
]);
log.normal('-----\n');