/**
 * The sole purpose of this script is to initialize ts-node to open the typed
 * configuration file.
 */
require('ts-node').register({ project: './tsconfig.json', files: true });
module.exports = require('./wdio.conf.ts');
