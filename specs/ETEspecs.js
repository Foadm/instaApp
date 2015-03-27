//Home page
var AppHomepage = function(){
    this.twitterOne = element.all(by.css("ul[name='Tweets'] > li:nth-child(1)"));
    this.twitterTwo = element(by.binding('pojo_maruthe.text'));
    this.get = function(){
        browser.get('http://localhost:8080/#/');
    }
}
describe('app home page', function(){
    it('should check to see if tweet texts exist', function(){
        var appHomepage = new AppHomepage();
        appHomepage.get();
        expect((appHomepage.twitterOne).isPresent()).toBe(true);
        expect((appHomepage.twitterTwo).isPresent()).toBe(true);
    })
})

//Detail page

var DetailPage = function(){
    this.detailTextOne = element(by.binding('pojo_grumpy.text'));
    this.detailImageOne = element(by.binding('pojo_grumpy.entities.media.media_url'));
    this.detailTextTwo = element(by.binding('pojo_maruthe.text'));
    this.detailImageTwo = element(by.binding('pojo_maruthe.entities.media.media_url'));
}