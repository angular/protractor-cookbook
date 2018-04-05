describe('On Protractor page', function () {

    beforeAll(function () {
        browser.get('http://www.protractortest.org/#/')
    });

    it('should have the expected the title', function () {
        expect(browser.getTitle()).toBe('Protractor - end-to-end testing for AngularJS');
    });
});
