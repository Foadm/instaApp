twitterSearch
    .config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'views/home/home.html',
            controller : 'homeCtrl'
        })
            .otherwise({
                redirectTo : '/error'
            })
    })
