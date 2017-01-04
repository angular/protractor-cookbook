var env = require('../environment');

describe('slow calculator', () => {
  var firstNum = element(by.model('first'));
  var secondNum = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var result = element(by.binding('latest'));

  beforeEach(() => {
    browser.get(env.url + '/ng1/calculator');
  });

  afterEach(() => {
    // for TypeScript:
    // import {logging} from 'selenium-webdriver';
    // browser.manage.logs().get(logging.Type.BROWSER)
    browser.manage().logs().get('browser').then(function(browserLog) {
      console.log('log: ' + require('util').inspect(browserLog));
    });
  });

  it('should pass a normal test', () => {
    firstNum.sendKeys('1');
    secondNum.sendKeys('2');
    goButton.click();
    expect(result.getText()).toEqual('3');
  });

  it('should fail when the console has errors - FAILURE EXPECTED', () => {
    browser.executeScript(function() {console.error('error from test'); });
  });

  it('should pass when the console has non-error logs', () => {
    browser.executeScript(function() {console.log('hi!'); });
  });
});
