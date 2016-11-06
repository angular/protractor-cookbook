"use strict";
var environment_1 = require('./environment');
/*
The config folder includes all the configuration files
This example config file displays the basic protractor-cucumber framework configuration
ts-node compiler is needed for cucumberjs
tags option for specific scenarios added
**/
exports.config = {
    directConnect: true,
    baseUrl: environment_1.environment.baseUrl,
    capabilities: environment_1.environment.capabilities,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        '../../Features/*.feature'
    ],
    // This utility function helps prepare our scripts with required actions like browser maximize
    onPrepare: function () {
        var globals = require('protractor');
        var browser = globals.browser;
        browser.driver.manage().window().maximize();
    },
    // These are various cucumber compiler options
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        monochrome: true,
        strict: true,
        plugin: ["pretty"],
        require: ['../../StepDefinitions/*.ts', '../../Support/*.ts'],
        //tags help us execute specific scenarios of feature files
        tags: '@AddScenario,@SubtractScenario,@MultiplyScenario,@DivideScenario,@ModulusScenario'
    }
};
