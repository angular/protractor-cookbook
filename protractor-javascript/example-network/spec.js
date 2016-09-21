describe('slow calculator', () => {
  var firstNum = element(by.model('first'));
  var secondNum = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var result = element(by.binding('latest'));

  beforeEach(() => {
    browser.get('/ng1/calculator');
  });

  afterEach(() => {
    browser.manage().logs().get('performance').then((browserLogs) => {
      browserLogs.forEach((browserLog) => {
        var message = JSON.parse(browserLog.message).message;
        if (message.method == 'Network.responseReceived') {
          console.log(message);
        }
      });
    });
  });

  it('should pass a normal test', () => {
    firstNum.sendKeys('1');
    secondNum.sendKeys('2');
    goButton.click();
    expect(result.getText()).toEqual('3');
  });
});
