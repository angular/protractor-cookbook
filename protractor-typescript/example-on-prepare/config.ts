import { ProtractorBrowser, Config } from 'protractor';

export let config: Config = {
  directConnect: true,
  specs: [ '../spec.js' ],
  onPrepare: () => {
    let globals = require('protractor');
    let browser = globals.browser;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(5000);
  }
}
