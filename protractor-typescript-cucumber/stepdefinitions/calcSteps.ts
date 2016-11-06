import { browser } from 'protractor';
import { CalculatorPageObject } from '../Pages/calcPage';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
/*
StepDefinition files act as the glue code between config and feature files
They drive the feature files from the background
**/
export = function () {
    let calc: CalculatorPageObject = new CalculatorPageObject();

    this.Given(/^I am on ng1 calculator page$/, () => {
        return expect(browser.getTitle()).to.eventually.equal('Super Calculator');
    });

    this.When(/^I calculate "(.*?)" "(.*?)" "(.*?)"$/, (num1: string, optor: string, num2: string) => {
        calc.first_operand.sendKeys(num1);
        calc.operator(optor).click();
        calc.second_operand.sendKeys(num2);
        return calc.go_button.click();

    });

    this.Then(/^the result "(.*?)" should be displayed$/, (result: string) => {
        return expect(calc.result.getText()).to.eventually.equal(result);
    });

}