exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ 'specs/*_spec.js' ],
  framework: 'jasmine',
  onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    var junitReporter = new jasmineReporters.JUnitXmlReporter({

      // setup the output path for the junit reports
      savePath: 'output/',

      // conslidate all true:
      //   output/junitresults.xml
      //
      // conslidate all set to false:
      //   output/junitresults-example1.xml
      //   output/junitresults-example2.xml
      consolidateAll: false

    });
    jasmine.getEnv().addReporter(junitReporter);
  }
};
