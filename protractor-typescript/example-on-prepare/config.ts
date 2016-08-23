import { ProtractorBrowser, Config } from 'protractor';

export let config: Config = {
  directConnect: true,
  specs: [ 'spec.js' ],
  onPrepare: () => {
    console.log('---------------------------');
    console.log('set up browser');
    console.log('---------------------------');
    let globals = require('protractor/globals');
    let browser: ProtractorBrowser = globals.browser;
    console.log(browser);
  }
}
