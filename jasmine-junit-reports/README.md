Introduction
============

Junit reports are helpful for

Setup
=====

```
npm install
```

installs protractor and jasmine-reporters

Setup for Jasmine JUnit Reports
===============================

Creating JUnit reports should be done in the Protractor configuration file
during the `onPrepare` function.
```
exports.config = {
  directConnect: true,
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
```

To generate the reports, run:

```
npm test
```

There are two specs in this example, each spec has two tests. Of these two tests
one should pass and the other should fail.

Output
======

The output should appear in the output directory. When consolidating all the
reports, a single JUnit report is created; however, when setting this to false,
each spec file gets its own JUnit report with the first describe string as the
file name.
