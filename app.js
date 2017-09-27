var App = angular.module('App', []);

App.controller('mainCtrl', function($scope, $http) {
  $http.get('data.json')
       .then(function(res){
          $scope.data = res.data;
        });

});
