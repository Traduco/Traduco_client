var traducoControllers = angular.module('traducoControllers');

traducoControllers.controller('ProjectListCtrl', ['$scope', '$http', '$location',
  	function ($scope, $http, $location) {
	    $http.get('http://localhost:3000/projects').success(function(json) {
	    	$scope.projects = json.data;
	    }).error(function(data, status, headers, config){
        if(status === 401) {
          $location.path ('/login');
        }
      });
 
    	$scope.getProjectPercentage = function(project) {
    		return project.translatedStrings * 100 / project.totalStrings;
    	}

    	$scope.newProject = function() {

    	}
  	}
]);