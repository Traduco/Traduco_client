var traducoControllers = angular.module('traducoControllers');

traducoControllers.controller('UserListCtrl', ['$scope', '$http', '$location', 'UserFactory',
  	function ($scope, $http, $location, UserFactory) {

	    $http.get('http://localhost:3000/users').success(function(json) {
	    	$scope.users = json.data;
	    }).error(function(data, status, headers, config){
        if(status === 401) {
          $location.path ('/login');
        }
      });

    	$scope.newUser = function() {
        $location.path('/users/' + user.id + '/edit');
    	}

      $scope.editUser = function(user) {
        $location.path('/users/' + user.id + '/edit');
      }
  	}
]);