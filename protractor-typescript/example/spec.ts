import { protractor, browser } from 'protractor/globals';

describe('angular.io', () => {
  it('should load angular.io\'s website', () => {
    protractor.browser.get('https://angular.io');
    protractor.browser.getCurrentUrl().then((url: string) => {
      console.log(url);
    })
  });
});
