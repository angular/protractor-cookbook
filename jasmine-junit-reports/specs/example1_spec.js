describe('example 1', () => {
  beforeEach(() => {
    browser.get('http://www.angularjs.org');
  });

  describe('typing in a name', () => {
    it('should type name and should pass', () => {
      element(by.model('yourName')).sendKeys('Julie');
      var greeting = element(by.binding('yourName'));
      expect(greeting.getText()).toEqual('Hello Julie!');
    });

    it('should type name and should fail', () => {
      element(by.model('yourName')).sendKeys('Julie');
      var greeting = element(by.binding('yourName'));
      expect(greeting.getText()).toEqual('Hello Not Julie!');
    });
  });


});
