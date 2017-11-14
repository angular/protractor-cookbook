import { browser, Config } from 'protractor';
import { Reporter } from '../support/reporter';
import { environment } from './environment';
const jsonReports = process.cwd() + '/reports/json';

/*
The config folder includes all the configuration files
This example config file displays the basic protractor-cucumber framework configuration
ts-node compiler is needed for cucumberjs
tags option for specific scenarios added
**/
export let config: Config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  baseUrl: environment.baseUrl,
  capabilities: environment.capabilities,
  framework: 'custom',
  SELENIUM_PROMISE_MANAGER: false,
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    '../../features/*.feature',
  ],
  // This utility function helps prepare our scripts with required actions like browser maximize
  onPrepare: () => {
    browser.driver.manage().window().maximize();
    Reporter.createDirectory(jsonReports);
  },
  // These are various cucumber compiler options
  cucumberOpts: {
    compiler: 'ts:ts-node/register',
    format: 'json:./reports/json/cucumber_report.json',
    require: ['../../stepdefinitions/*.ts', '../../support/*.ts'],
    strict: true,
    // tags help us execute specific scenarios of feature files
    tags: '@AddScenario or @SubtractScenario or @MultiplyScenario or @DivideScenario or @ModulusScenario',
  },

  onComplete: () => {
    Reporter.createHTMLReport();
  },
};
