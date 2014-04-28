var traducoControllers = angular.module('traducoControllers');

traducoControllers.controller('ProjectCtrl', ['$scope', '$http', '$location', '$routeParams',
  	function ($scope, $http, $location, $routeParams) {
        $scope.project = {};
        var id = $routeParams.id;
        if(id) {
            // We are editing a user, let's fetch him first
            $http.get('http://localhost:3000/projects/' + id).success(function(json) {
                $scope.project = json.project;
            }).error(function(data, status, headers, config){
                if(status === 401) {
                    $location.path ('/login');
                }
            });
        } 

        $scope.goToProjects = function() {
            $location.path('/projects');
        }

        $scope.goToProject = function(project) {
            $location.path('/projects/' + project.id);
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