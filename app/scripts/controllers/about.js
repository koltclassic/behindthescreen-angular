'use strict';

/**
 * @ngdoc function
 * @name angulartestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angulartestApp
 */
angular.module('angulartestApp', ['angularUtils.directives.dirPagination'])
  .controller('AboutCtrl', function ($scope, $http) {
    $http.get('data/treasure.json')
      .then(function(res){
        $scope.searchResults = '';
        $scope.treasure = res.data;
        $scope.sortType = 'Name';
        $scope.randomResult = function(){
          var randomTreasure = $scope.treasure[Math.floor(Math.random() * $scope.treasure.length)];
          $scope.rName = randomTreasure.Name;
          $scope.rType = randomTreasure.Type;
          $scope.rDescription = randomTreasure.Description;
        };
      });
    
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.data = [];
    $scope.numberOfPages=function(){
        return Math.ceil($scope.data.length/$scope.pageSize);                
    }

    $scope.sort = function(keyname){
      $scope.sortKey = keyname; // set the sortKey to the param passed
      $scope.reverse = !$scope.reverse //if true make it false and vice versa
    }

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  ;
