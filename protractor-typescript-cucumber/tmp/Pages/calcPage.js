"use strict";
var protractor_1 = require('protractor');
/*
Page Objects help in better re-usablitity and maintenance of element locators
This file exports CalculatorPageObject class
**/
var CalculatorPageObject = (function () {
    function CalculatorPageObject() {
        this.first_operand = protractor_1.element(protractor_1.by.model('first'));
        this.second_operand = protractor_1.element(protractor_1.by.model('second'));
        this.operator = function (optor) {
            return protractor_1.element(protractor_1.by.cssContainingText('option', optor));
        };
        this.go_button = protractor_1.element(protractor_1.by.id('gobutton'));
        this.result = protractor_1.element(protractor_1.by.binding('latest'));
    }
    return CalculatorPageObject;
}());
exports.CalculatorPageObject = CalculatorPageObject;
