/* @flow */

/* eslint-env node */

module.exports = function(/* content */) {
  this.cacheable && this.cacheable();
  return '';
};