angular.module('pages', ['ui.router','ngAnimate']);

angular.module('pages').config(function($stateProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'pages/partial/home/home.html'
    });
    $stateProvider.state('search', {
        url: '/search/:query',
        templateUrl: 'pages/partial/search/search.html'
    });
    $stateProvider.state('profile', {
        url: '/profile/:id',
        templateUrl: 'pages/partial/profile/profile.html'
    });
    /* Add New States Above */

});

