//Home page
var AppHomepage = function(){
    this.assert = ['first-text', 'first-user', 'first-date',
        'second-text', 'second-user', 'second-date'];
    var assertions = [];
    this.assert.forEach(function(entry){
        var testClass = '.' + entry;
        assertions.push(element(by.css(testClass)));
    });
    this.assertions = assertions;
    this.get = function(){
        browser.get('http://localhost:8080/#/');
    }
}
describe('app home page', function(){
    it('should check to see if tweet texts exist', function(){
        var appHomepage = new AppHomepage();
        var matchedData = ['Four more years. http://t.co/bAJE6Vom','Foad Mozaffari','Mon Sep 24 03:35:21 +0000 2012',
            'maruthe cat maruthe cat maruthe cat','Chaz Martenstein','Mon Sep 21 04:35:21 +0000 2012'];
        appHomepage.get();
        var i = 0;
        appHomepage.assertions.forEach(function(entry){
            expect((entry).getText()).toEqual(matchedData[i]);
            i = i + 1;
        });
    })
})

//Detail page

var AppDetailpage = function(){
    this.detailText = element(by.css(".text"));
    this.detailMedia = element(by.css(".media"));
    this.detailHash = element(by.css(".hashtag"));
    this.detailUser = element(by.css(".user"));
    this.detailDate = element(by.css(".date"));
    this.get = function(){
        browser.get('http://localhost:8080/#/detail.html');
    }
}
describe('app detail page', function(){
    it('should check the content in detail page', function(){
        var appDetailpage = new AppDetailpage();
        appDetailpage.get();
        expect((appDetailpage.detailText).getText()).toEqual('Four more years. http://t.co/bAJE6Vom');
        expect((appDetailpage.detailUser).getText()).toEqual('Foad Mozaffari');
        expect((appDetailpage.detailDate).getText()).toEqual('Mon Sep 24 03:35:21 +0000 2012');
        expect((appDetailpage.detailHash).getText()).toEqual('#grumpyCat');

    })
})
