angular.module('coachme', ['ui.router', 'ngAnimate', 'pages']);

angular.module('coachme').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('coachme').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
