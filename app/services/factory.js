var twitterSearch = angular.module('twitterSearch', ['ngRoute'])
    .factory('makeRequest', ['$http', '$q', function($http,$q) {
        var Twitter = require('twitter');

        var client = new Twitter({
            consumer_key: '6KF17uS5D5aJeD75dvDgKhvjj',
            consumer_secret: '7iE68RG0uXX8jN2KRL9NEA1g2yMFHyh0UXRdyKpOSbBXPOkxFD',
            access_token_key: '409462291-ds696UPmHv1tgZTTDilnnab0GNC93OSe71whpNHw',
            access_token_secret: 'r4w1xGENHsrlD4iTadxrQCOpd0AIs5FSy4wkgB9VKkf5r'
        });
        return {
            grumpyCat: grumpyCat,
            //marutheCat: marutheCat
        }
        function grumpyCat(){
            client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response){
                console.log(tweets);
            });
        }
    }]);

