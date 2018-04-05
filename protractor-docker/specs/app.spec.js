describe('On app page', function () {

  beforeAll(function () {
    browser.get('http://angular:8000')
  })

  it('should have the expected the title', function () {
    expect(element(by.css('h1')).getText()).toBe('Todo');
  });

  it('should update list when I add a todo item', function () {
    element(by.css('input[type="text"]')).sendKeys('Add protractor test');
    element(by.css('.btn-primary')).click();
    expect(element(by.css('ul li:last-child')).getText()).toBe('Add protractor test');
  });
});