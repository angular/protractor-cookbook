Feature: To test the multiply & divide feature of ng1 calculator

@MultiplyScenario
Scenario: Multiply two numbers
Given I am on ng1 calculator page
When I calculate "3" "*" "5"
Then the result "15" should be displayed

@DivideScenario
Scenario: Divide two numbers
Given I am on ng1 calculator page
When I calculate "10" "/" "5"
Then the result "2" should be displayed