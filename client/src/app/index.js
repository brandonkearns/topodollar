'use strict';

angular.module('incomeMaps', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('state', {
        url: '/state/:name',
        templateUrl: 'app/state/state.html',
        controller: 'StateCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
