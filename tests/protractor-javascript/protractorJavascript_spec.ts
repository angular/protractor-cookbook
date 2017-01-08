import {TestUtils} from '../testUtils';

describe('protractor javascript tests', () => {
  let output = [];
  let lines: string[] = null;
  let options = {
    cwd: 'protractor-javascript',
    stdio: 'pipe'
  };

  beforeAll(() => {
    TestUtils.runCommand('npm', ['install'], options);
    output = TestUtils.runCommand('npm', ['run', 'pretest'], options);
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

  describe('example-browserlog', () => {
    beforeAll(() => {
      output = TestUtils.runCommand('npm', ['run', 'example-browserlog'], options);
      if (output[1]) {
        let contents = output[1].toString();
        lines = contents.split('\n');
      }
    });

    it('console output', () => {
      let findLines = [
        'log: [ Entry {',
        'level: Level { name_: \'SEVERE\', value_: 1000 },',
        'type: \'\' } ]',
        'log: []',
        '3 specs, 0 failures'
      ];

      expect(lines).not.toBeNull();
      expect(TestUtils.checkContents(lines, findLines)).toBeTruthy();
    });
  });

  describe('example-network', () => {
    beforeAll(() => {
      output = TestUtils.runCommand('npm', ['run', 'example-network'], options);
      if (output[1]) {
        let contents = output[1].toString();
        lines = contents.split('\n');
      }
    });

    it('console output', () => {
      let findLines = [
        '{ method: \'Network.responseReceived\',',
        'params:',
        'url: \'data:text/html,<html></html>\' },',
        'type: \'Document\' } }'
      ];

      expect(lines).not.toBeNull();
      expect(TestUtils.checkContents(lines, findLines)).toBeTruthy();
    });
  });

  describe('example-screenshot', () => {
    beforeAll(() => {
      output = TestUtils.runCommand('npm', ['run', 'example-screenshot'], options);
      if (output[1]) {
        let contents = output[1].toString();
        lines = contents.split('\n');
      }
    });

    it('console output', () => {
      // still needs to test the screenshots
    });
  });
});
