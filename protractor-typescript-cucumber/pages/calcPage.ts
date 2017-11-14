import { $, by, element, ElementFinder } from 'protractor';
/*
Page Objects help in better re-usablitity and maintenance of element locators
This file exports CalculatorPageObject class
**/
class CalculatorPageObject {
  public get firstOperand(): ElementFinder { return element(by.model('first')); }
  public get secondOperand(): ElementFinder { return element(by.model('second')); }
  public get goButton(): ElementFinder { return element(by.id('gobutton')); }
  public get result(): ElementFinder { return element(by.binding('latest')); }
  public operator: any;

  constructor() {
    this.operator = (optor: string) => {
     return element(by.cssContainingText('option', optor));
    };
  }
}

/**
 * Export the instance of page objects in order to
 * reduce flakiness and stateless priciple
 */
export const CalculatorPage = new CalculatorPageObject();
