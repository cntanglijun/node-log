import log from '../lib/node-log';

const testString = 'hello world!';

log.normal('%s', testString);
log.info('%s', testString);
log.warn('%s', testString);
log.success('%s', testString);
log.error('%s', testString);