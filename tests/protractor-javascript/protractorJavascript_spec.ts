import {TestUtils} from '../testUtils';

describe('protractor javascript tests', () => {
  let options = {
    cwd: 'protractor-javascript',
    stdio: 'pipe'
  };

  beforeAll(() => {
    TestUtils.runCommand('npm', ['install'], options);
  });

  it('do something', () => {
    let output = TestUtils.runCommand('npm', ['test'], options);
    expect(output[2].toString()).toEqual('');
  });
});
