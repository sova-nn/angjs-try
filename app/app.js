'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    // 'ngRouter',
    'ui.router',
    'myApp.main',
    'myApp.form',
    'myApp.version',
    'ui.bootstrap'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/index');

  $stateProvider
      .state('form', {
        url: "/form",
        templateUrl: "/form/form.html"
      });

    $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "/main/main.html"
        });

}]);
