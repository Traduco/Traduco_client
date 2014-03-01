var traducoControllers = angular.module('traducoControllers', []);
 
traducoControllers.controller('ApplicationController', ['$scope',
  	function ($scope) {
	    
    	$scope.goToProjects = function() {
    		console.log("in route for projects");
    	}

    	$scope.goToUsers = function() {
    		console.log("in route for users");
    	}
  	}
]);