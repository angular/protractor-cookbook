var env = require('../environment');

// Tests for the calculator.
exports.config = {
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },
  specs: [
    'spec.js'
  ],
  baseUrl: env.baseUrl,
  framework: 'jasmine2'
};
