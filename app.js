(function(angular) {
    'use strict';

var app = angular.module('app', []);

app.controller("FeverController",["$scope", function($scope) {
        $scope.temperature = 100;
    }]);
    
})(window.angular);