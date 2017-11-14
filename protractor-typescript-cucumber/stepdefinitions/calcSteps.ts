import { browser } from 'protractor';
import { CalculatorPage } from '../pages/calcPage';
const {Given, When, Then} = require('cucumber');
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
/*
StepDefinition files act as the glue code between config and feature files
They drive the feature files from the background
**/

Given(/^I am on ng1 calculator page$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal('Super Calculator');
});

When(/^I calculate "(.*?)" "(.*?)" "(.*?)"$/, async (num1: string, optor: string, num2: string) => {
   await CalculatorPage.firstOperand.sendKeys(num1);
   await CalculatorPage.operator(optor).click();
   await CalculatorPage.secondOperand.sendKeys(num2);
   await CalculatorPage.goButton.click();
});

Then(/^the result "(.*?)" should be displayed$/, async (result: string) => {
    await expect(CalculatorPage.result.getText()).to.eventually.equal(result);
});
