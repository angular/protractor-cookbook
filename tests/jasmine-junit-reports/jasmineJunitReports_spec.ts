import {TestUtils} from '../testUtils';
import * as path from 'path';

describe('jasmine junit reports', () => {
  let output = [];
  let lines: string[] = null;

  beforeAll(() => {
    let options = {
      cwd: '../jasmine-junit-reports',
      stdio: 'pipe'
    };
    output = TestUtils.runCommand('npm', ['install'], options);
    output = TestUtils.runCommand('npm', ['test'], options);
    if (output[1]) {
      let contents = output[1].toString();
      console.log(contents);
      lines = contents.split('\n');
    }
  });

  describe('console output', () => {
    let findLines = [
      '1) example 1 typing in a name should type name and should fail',
      '2) example 2 should list todos and should fail',
      '4 specs, 2 failures'
    ];
    findLines.forEach(line => {
      it('should have: "' + line + '"', () => {
        expect(lines).not.toBeNull();
        expect(TestUtils.fileContains(line, lines)).toBeTruthy();
      });
    });
  });

  describe('junit report', () => {
    it('should have output/junitresults-example1.xml', () => {
      let filePath = path.resolve('../jasmine-junit-reports',
        'output/junitresults-example1.xml');
      let fileLines = TestUtils.getFileLines(filePath);
      let findLines = [
        '<failure type="toEqual" message="Expected &apos;Hello Julie!&apos; to equal &apos;Hello Not Julie!&apos;.">',
        'errors="0" tests="2" skipped="0" disabled="0" failures="1"'];
      expect(fileLines).not.toBeNull();
      findLines.forEach(line => {
        expect(TestUtils.fileContains(line, fileLines)).toBeTruthy();
      });
    });
    it('should have output/junitresults-example2.xml', () => {
      let filePath = path.resolve('../jasmine-junit-reports',
        'output/junitresults-example2.xml');
      let fileLines = TestUtils.getFileLines(filePath);
      let findLines = [
        '<failure type="toEqual" message="Expected 2 to equal 100.">',
        '<failure type="toEqual" message="Expected &apos;build an angular app&apos; to equal &apos;something else&apos;.">',
        'errors="0" tests="2" skipped="0" disabled="0" failures="2"'];
      expect(fileLines).not.toBeNull();
      findLines.forEach(line => {
        expect(TestUtils.fileContains(line, fileLines)).toBeTruthy();
      });
    });
  });
});
