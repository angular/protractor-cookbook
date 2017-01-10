import {Config} from 'protractor';

export let config: Config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: [ '../spec.js' ]
};
