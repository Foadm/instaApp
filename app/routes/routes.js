twitterSearch
    .config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'views/home/home.html',
            controller : 'homeCtrl'
        })
            .when('/detail', {
            templateUrl : 'views/detail/detail.html',
            controller : 'DetailCtrl'
        })
            .otherwise({
                redirectTo : '/error'
            })
    })
