import { $, by, element, ElementFinder } from 'protractor';
/*
Page Objects help in better re-usablitity and maintenance of element locators
This file exports CalculatorPageObject class
**/
export class CalculatorPageObject {
  public first_operand:ElementFinder;
  public second_operand:ElementFinder;
  public operator: any;
  public go_button: ElementFinder;
  public result: ElementFinder;

  constructor() {
    this.first_operand = element(by.model('first'));
    this.second_operand = element(by.model('second'));
    this.operator = (optor:string) => {
     return element(by.cssContainingText('option',optor));
    }
    this.go_button = element(by.id('gobutton'));
    this.result = element(by.binding('latest'));
  }
}
