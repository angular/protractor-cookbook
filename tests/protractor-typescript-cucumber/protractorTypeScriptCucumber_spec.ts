import {TestUtils} from '../testUtils';

describe('protractor typescript cucumber', () => {
  let output = [];
  let lines: string[] = null;
  let options = {
    cwd: 'protractor-typescript-cucumber',
    stdio: 'pipe'
  };

  beforeAll(() => {
    TestUtils.runCommand('npm', ['install'], options);
    TestUtils.runCommand('npm', ['run', 'pretest'], options);
  });

  describe('test', () => {
    beforeAll(() => {
      output = TestUtils.runCommand('npm', ['run', 'example'], options);
      if (output[1]) {
        let contents = output[1].toString();
        lines = contents.split('\n');
      }
    });

    it('console output', () => {
      let findLines = [
        '@AddScenario',
        'Scenario: Add two numbers',
        '✔ Given I am on ng1 calculator page',
        '✔ When I calculate "3" "+" "5"',
        '✔ Then the result "8" should be displayed',

        '@SubtractScenario',
        'Scenario: Subtract two numbers',
        '✔ Given I am on ng1 calculator page',
        '✔ When I calculate "7" "-" "5"',
        '✔ Then the result "2" should be displayed',
        'Feature: To test the modulus feature of ng1 calculator',

        '@ModulusScenario',
        'Scenario: Modulus of two numbers',
        '✔ Given I am on ng1 calculator page',
        '✔ When I calculate "6" "%" "4"',
        '✔ Then the result "2" should be displayed',

        'Feature: To test the multiply & divide feature of ng1 calculator',
        '@MultiplyScenario',
        'Scenario: Multiply two numbers',
        '✔ Given I am on ng1 calculator page',
        '✔ When I calculate "3" "*" "5"',
        '✔ Then the result "15" should be displayed',

        '@DivideScenario',
        'Scenario: Divide two numbers',
        '✔ Given I am on ng1 calculator page',
        '✔ When I calculate "10" "/" "5"',
        '✔ Then the result "2" should be displayed',

        '5 passed',
        '15 passed'
      ];
      expect(lines).not.toBeNull();
      expect(TestUtils.checkContents(lines, findLines)).toBeTruthy();
    });
  });
});
