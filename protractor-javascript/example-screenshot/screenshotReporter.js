var mkdirp = require('mkdirp');
var fs = require('fs');
var path = require('path');

var ScreenshotReporter = function(dir_) {
  console.log('here');
  var dir = (dir_ ? dir_ : '/tmp/protractorss/');
  dir = path.join(dir, new Date().toISOString());
  var index = 0;

  // base function to take a screenshot -- change path as needed
  var screenshot = function(testDescription, id) {
    console.log('screenshot');
    var fname = testDescription.replace(/\s/g, '_') + '_' + id + '.png';
    mkdirp(dir);
    browser.takeScreenshot().then(function(png) {
      var stream = fs.createWriteStream(path.join(dir, fname));
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
  };

  // takes screenshot on each failed expect
  var originalAddMatcherResult = jasmine.Spec.prototype.addExpectationResult;
  jasmine.Spec.prototype.addExpectationResult = function() {
    console.log('addmatcher');
    ++index;
    console.log(arguments);
    if (!arguments[0].passed) {
      screenshot(this.description, index);
    }
    return originalAddMatcherResult.apply(this, arguments);
  };

  // takes screenshot on each failed spec (including timeout)
  this.reportSpecResults = function(spec) {
    if (!spec.results().passed()) {
      screenshot(spec.description, 'end');
    }
    index = 0;
  };
};

module.exports = ScreenshotReporter;
