// Tests for the calculator.
exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  specs: [
    'spec.js'
  ]
};
