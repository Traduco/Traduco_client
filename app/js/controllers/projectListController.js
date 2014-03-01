var traducoControllers = angular.module('traducoControllers');

traducoControllers.controller('ProjectListCtrl', ['$scope', '$http',
  	function ($scope, $http) {
	    $http.get('http://localhost:3000/projects').success(function(json) {
	    	$scope.projects = json.data;
	    });
 
    	$scope.getProjectPercentage = function(project) {
    		return project.translatedStrings * 100 / project.totalStrings;
    	}

    	$scope.newProject = function() {

    	}
  	}
]);