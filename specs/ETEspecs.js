//Home page
var AppHomepage = function(){
    this.twitterOneText = element(by.css(".first-text"));
    this.twitterOneUser = element(by.css(".first-user"));
    this.twitterOneDate = element(by.css(".first-date"));

    this.twitterTwoText = element(by.css(".second-text"));
    this.twitterTwoUser = element(by.css(".second-user"));
    this.twitterTwoDate = element(by.css(".second-date"));
    this.get = function(){
        browser.get('http://localhost:8080/#/');
    }
}
describe('app home page', function(){
    it('should check to see if tweet texts exist', function(){
        var appHomepage = new AppHomepage();
        appHomepage.get();
        expect((appHomepage.twitterOneText).getText()).toEqual('Four more years. http://t.co/bAJE6Vom');
        expect((appHomepage.twitterOneUser).getText()).toEqual('Foad Mozaffari');
        expect((appHomepage.twitterOneDate).getText()).toEqual('Mon Sep 24 03:35:21 +0000 2012');

        expect((appHomepage.twitterTwoText).getText()).toEqual('maruthe cat maruthe cat maruthe cat');
        expect((appHomepage.twitterTwoUser).getText()).toEqual('Chaz Martenstein');
        expect((appHomepage.twitterTwoDate).getText()).toEqual('Mon Sep 21 04:35:21 +0000 2012');
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
