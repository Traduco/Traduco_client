var traducoControllers = angular.module('traducoControllers');

traducoControllers.controller('LoginCtrl', ['$scope', '$http',
  	function ($scope, $http) {
  		$scope.user = {};
	    $scope.login = function(user) {
	    	// Do some user validation
	    }
  	}
]);