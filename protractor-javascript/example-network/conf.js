var env = require('../environment');

// Tests for the calculator.
exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: [
    'spec.js'
  ],

  framework: 'jasmine2',

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'perfLoggingPrefs': {
        'enableNetwork': true,
        'enablePage': false,
        'enableTimeline': false
      }
    },
    loggingPrefs: {
      performance: 'ALL',
      browser: 'ALL'
    }
  },

  baseUrl: env.baseUrl
};
