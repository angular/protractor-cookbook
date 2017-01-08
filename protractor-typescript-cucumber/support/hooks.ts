/*jslint node: true*/
import { browser } from 'protractor';
import * as fs from 'fs';
/*
Hooks help us follow DRY principle, all the utility functions go here
BeforeScenario, Features and screenshot hooks example provided here
**/
export = function () {

  this.registerHandler('BeforeFeature', (event) => {
    return browser.get('/ng1/calculator');
  });

  this.After((scenario, done) => {
    if (scenario.isFailed()) {
      return browser.takeScreenshot().then(function (base64png) {
        let decodedImage = new Buffer(base64png, 'base64').toString('binary');
        scenario.attach(decodedImage, 'image/png');
      }, (err) => {
        done(err);
      });
    } else {
      done();
    }
  });
}
