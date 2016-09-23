"use strict";
var protractor_1 = require('protractor');
var calcPage_1 = require('../Pages/calcPage');
var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
module.exports = function () {
    var calc = new calcPage_1.CalculatorPageObject();
    this.Given(/^I am on ng1 calculator page$/, function () {
        return expect(protractor_1.browser.getTitle()).to.eventually.equal('Super Calculator');
    });
    this.When(/^I calculate "(.*?)" "(.*?)" "(.*?)"$/, function (num1, optor, num2) {
        calc.first_operand.sendKeys(num1);
        calc.operator(optor).click();
        calc.second_operand.sendKeys(num2);
        return calc.go_button.click();
    });
    this.Then(/^the result "(.*?)" should be displayed$/, function (result) {
        return expect(calc.result.getText()).to.eventually.equal(result);
    });
};
