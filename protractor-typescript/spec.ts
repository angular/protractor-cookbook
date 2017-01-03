import { ElementFinder, browser, by, element } from 'protractor';
import * as env from './environment';

describe('slow calculator', () => {
  beforeEach(() => {
    browser.get(env.url + '/ng1/calculator/');
  });

  it('should add numbers', () => {
    element(by.model('first')).sendKeys('4');
    element(by.model('second')).sendKeys('5');
    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).toEqual('9');
  });

  describe('memory', () => {
    let first: ElementFinder;
    let second: ElementFinder;
    let goButton: ElementFinder;

    beforeEach(() => {
      first = element(by.model('first'));
      second = element(by.model('second'));
      goButton = element(by.id('gobutton'));
    });

    it('should start out with an empty memory', () => {
      let memory = element.all(by.repeater('result in memory'));

      expect(memory.count()).toEqual(0);
    });

    it('should fill the memory with past results', () => {
      first.sendKeys('1');
      second.sendKeys('1');
      goButton.click();

      first.sendKeys('10');
      second.sendKeys('20');
      goButton.click();

      let memory = element.all(by.repeater('result in memory').
          column('result.value'));
      memory.then((arr) => {
        expect(arr.length).toEqual(2);
        expect(arr[0].getText()).toEqual('30'); // 10 + 20 = 30
        expect(arr[1].getText()).toEqual('2'); // 1 + 1 = 2
      },
      // TODO: remove optional error fn
      () => {});
    });
  });
});
