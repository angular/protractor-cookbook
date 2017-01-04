import { browser, Config } from 'protractor';

export let config: Config = {
  specs: [ '../spec.js' ],
  onPrepare: () => {
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(5000);
  }
};
