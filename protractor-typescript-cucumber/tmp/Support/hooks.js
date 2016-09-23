"use strict";
/*jslint node: true*/
var protractor_1 = require('protractor');
var config_1 = require('../Config/config');
module.exports = function () {
    this.registerHandler('BeforeFeature', function (event) {
        return protractor_1.browser.get(config_1.config.baseUrl);
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
