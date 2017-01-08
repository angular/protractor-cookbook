import {TestUtils} from '../testUtils';

describe('protractor typescript tests', () => {
  let output = [];
  let lines: string[] = null;
  let options = {
    cwd: 'protractor-typescript',
    stdio: 'pipe'
  };

  beforeAll(() => {
    TestUtils.runCommand('npm', ['install'], options);
    TestUtils.runCommand('npm', ['run', 'pretest'], options);
  });

  describe('example', () => {
    beforeAll(() => {
      output = TestUtils.runCommand('npm', ['run', 'example'], options);
      if (output[1]) {
        let contents = output[1].toString();
        lines = contents.split('\n');
      }
    });

    it('console output', () => {
      let findLines = [
        '3 specs, 0 failures'
      ];
      expect(lines).not.toBeNull();
      expect(TestUtils.checkContents(lines, findLines)).toBeTruthy();
    });
  });

  describe('example on prepare', () => {
    beforeAll(() => {
      output = TestUtils.runCommand('npm', ['run', 'example-on-prepare'], options);
      if (output[1]) {
        let contents = output[1].toString();
        lines = contents.split('\n');
      }
    });

    it('console output', () => {
      let findLines = [
        '3 specs, 0 failures'
      ];
      expect(lines).not.toBeNull();
      expect(TestUtils.checkContents(lines, findLines)).toBeTruthy();
    });
  });
});
