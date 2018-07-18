// Tests for the calculator.
exports.config = {
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: [ "no-sandbox" ]
    }
  },
  directConnect: true,
  specs: [
    'specs/*spec.js'
  ],
  onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    var junitReporter = new jasmineReporters.JUnitXmlReporter({

      // setup the output path for the junit reports
      // note: The report will be created inside of the container.
      //       We use a named volume in the compose file to make it available
      //       outside of the container
      savePath: '/test-output/',
      consolidateAll: true

    });
    jasmine.getEnv().addReporter(junitReporter);
  }
};
