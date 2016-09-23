/*jslint node: true*/
import { browser } from 'protractor';
import * as fs from 'fs';
import { config } from '../Config/config';
/*
Hooks help us follow DRY principle, all the utility functions go here
BeforeScenario, Features and screenshot hooks example provided here
**/
export = function () {

    this.registerHandler('BeforeFeature', (event) => {
        return browser.get(config.baseUrl);
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