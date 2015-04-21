//Home page
var Homepage = function(){
    browser.get('http://localhost:8080');
    this.tweets = element.all(by.css(".tweets li")).map(function(li) {
       return li.$$(".text").map(function(div) {
           return div.getText();
       });
    });
};

describe('app home page', function() {
    it('displays tweets', function() {
        homepage = new Homepage();
        expect(homepage.tweets).toEqual([
            ['Four more years. http://t.co/bAJE6Vom', 'Foad Mozaffari',   'Mon Sep 24 03:35:21 +0000 2012'],
            ['maruthe cat maruthe cat maruthe cat',   'Chaz Martenstein', 'Mon Sep 21 04:35:21 +0000 2012']
        ]);
    })
});


//Detail page
var AppDetailpage = function(){
    this.clickTweet = element(by.css('.col-md-12')).click();
    this.detailTweets = element.all(by.css('.col-md-6 .text')).map(function(div){
        return div.getText();
    });
};


describe('app detail page', function(){
    it('should check the content in detail page', function(){
        var appDetailpage = new AppDetailpage();
            expect(appDetailpage.detailTweets).toEqual(['Four more years. http://t.co/bAJE6Vom', 'Foad Mozaffari', 'Mon Sep 24 03:35:21 +0000 2012', '#grumpyCat']);
    })
})
