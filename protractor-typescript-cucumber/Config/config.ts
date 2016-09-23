import {ProtractorBrowser} from 'protractor';
/*
The config folder includes all the configuration files
This example config file displays the basic protractor-cucumber framework configuration
ts-node compiler is needed for cucumberjs
tags option for specific scenarios added
**/
export let config = {

    directConnect: true,

    baseUrl: 'http://juliemr.github.io/protractor-demo/',

    capabilities: {
        browserName: 'firefox'
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        '../../Features/*.feature'
    ],
    // This utility function helps prepare our scripts with required actions like browser maximize
    onPrepare: () => {
        let globals = require('protractor');
        let browser: ProtractorBrowser = globals.browser;
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