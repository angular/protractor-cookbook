describe('example 2', () => {
   var todoList;
  beforeEach(() => {
    browser.get('http://www.angularjs.org');
    todoList = element.all(by.repeater('todo in todoList.todos'));
  });

  it('should list todos and should pass', () => {
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
  });

  it('should list todos and should fail', () => {
    expect(todoList.count()).toEqual(100);
    expect(todoList.get(1).getText()).toEqual('something else');
  });
});
