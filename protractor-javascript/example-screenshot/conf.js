// Tests for the calculator.
var env = require('../environment');
var ScreenshotReporter = require('./screenshotReporter');

exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  specs: [
    'spec.js'
  ],

  framework: 'jasmine2',

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: env.baseUrl,

  onPrepare: function() {
    jasmine.getEnv().addReporter(new ScreenshotReporter('output'));
  }
};
