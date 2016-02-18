/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
  });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import('bower_components/babel-polyfill/browser-polyfill.js');

  app.import({
    development: 'bower_components/buzz-core/buzz-core.amd.js',
    production: 'bower_components/buzz-core/buzz-core.amd.min.js',
    test: 'bower_components/buzz-core/buzz-core-testing.amd.js'
  });

  return app.toTree();
};
