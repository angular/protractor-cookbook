"use strict";
/*jslint node: true*/
var protractor_1 = require('protractor');
module.exports = function () {
    this.registerHandler('BeforeFeature', function (event) {
        return protractor_1.browser.get('/ng1/calculator');
    });
    this.After(function (scenario, done) {
        if (scenario.isFailed()) {
            return protractor_1.browser.takeScreenshot().then(function (base64png) {
                var decodedImage = new Buffer(base64png, 'base64').toString('binary');
                scenario.attach(decodedImage, 'image/png');
            }, function (err) {
                done(err);
            });
        }
        else {
            done();
        }
    });
};
