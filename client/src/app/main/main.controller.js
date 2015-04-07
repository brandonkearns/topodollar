'use strict';

angular.module('incomeMaps')
  .controller('MainCtrl', function ($scope) {
    $scope.states = [];
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
