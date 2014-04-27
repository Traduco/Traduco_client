var traducoControllers = angular.module('traducoControllers');

traducoControllers.controller('UserCtrl', ['$scope', '$http', '$location', '$routeParams',
  	function ($scope, $http, $location, $routeParams) {
        $scope.user = {};
        $scope.person = {};
        var id = $routeParams.id;
        if(id) {
            // We are editing a user, let's fetch him first
            $http.get('http://localhost:3000/users/' + id).success(function(json) {
                $scope.person = json.user;
            }).error(function(data, status, headers, config){
                if(status === 401) {
                    $location.path ('/login');
                }
            });
        } 

        $scope.goToUsers = function() {
            $location.path('/users');
        }

        $scope.save = function(person) {
            var me = $scope;
            debugger;
        }

        $scope.cancel = function() {
            debugger;
        }
  	}
]);