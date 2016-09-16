describe('On AngularJS page', function () {

    beforeAll(function () {
        browser.get('https://angularjs.org')
    });

    it('should have the expected the title', function () {
        expect(browser.getTitle()).toBe('AngularJS — Superheroic JavaScript MVW Framework');
    });
});
