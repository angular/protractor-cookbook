Feature: To test the add & subtract feature of ng1 calculator

@AddScenario
Scenario: Add two numbers
Given I am on ng1 calculator page
When I calculate "3" "+" "5"
Then the result "8" should be displayed

@SubtractScenario
Scenario: Subtract two numbers
Given I am on ng1 calculator page
When I calculate "7" "-" "5"
Then the result "2" should be displayed