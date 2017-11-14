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
        '5 scenarios',
        '15 steps'
      ];
      expect(lines).not.toBeNull();
      expect(TestUtils.checkContents(lines, findLines)).toBeTruthy();
    });
  });
});
