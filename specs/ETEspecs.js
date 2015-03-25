describe('angularjs homepage', function() {
    it('should have a title', function() {
        browser.get('http://localhost:8080/#/');
        expect(element(by.id('test')).isPresent()).toBeTruthy();
    });
});