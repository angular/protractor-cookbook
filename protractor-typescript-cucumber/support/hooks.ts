import { browser } from 'protractor';
const { BeforeAll, After, setDefaultTimeout, Status } = require('cucumber');
import * as fs from 'fs';
/*
Hooks help us follow DRY principle, all the utility functions go here
BeforeScenario, Features and screenshot hooks example provided here
**/
setDefaultTimeout(10 * 1000);

BeforeAll(async () => {
    await browser.get('/ng1/calculator');
});

After(async (scenario) => {
  if (scenario.result.status === Status.FAILED) {
      // screenShot is a base-64 encoded PNG
      const screenShot = await browser.takeScreenshot();
      this.attach(screenShot, 'image/png');
  }
});
