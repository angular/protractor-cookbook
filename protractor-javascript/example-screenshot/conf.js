// Tests for the calculator.
var env = require('../environment');
var ScreenshotReporter = require('./screenshotReporter');

exports.config = {
  directConnect: true,

  specs: [
    'spec.js'
  ],

  framework: 'jasmine2',

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: env.baseUrl,

  onPrepare: function() {
    jasmine.getEnv().addReporter(new ScreenshotReporter("output"));
  }
};
