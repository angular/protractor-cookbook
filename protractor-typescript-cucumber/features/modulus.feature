Feature: To test the modulus feature of ng1 calculator

@ModulusScenario
Scenario: Modulus of two numbers
Given I am on ng1 calculator page
When I calculate "6" "%" "4"
Then the result "2" should be displayed