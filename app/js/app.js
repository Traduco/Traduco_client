var traducoApp = angular.module('traducoApp', [
  'ngRoute',
  'ngResource',
  'traducoControllers',
  'traducoFactories',
  'traducoDirectives',
  'ui.bootstrap'
]);

traducoApp.config(['$routeProvider', '$httpProvider',
  function($routeProvider, $httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    // Taking care of routing
    $routeProvider.
    when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
    }).
    when('/projects', {
        templateUrl: 'partials/project/project-list.html',
        controller: 'ProjectListCtrl'
    }).
    when('/projects/:id', {
        templateUrl: 'partials/project/project-show.html',
        controller: 'ProjectCtrl'
    }).
    when('/projects/new', {
        templateUrl: 'partials/project/project-new.html',
        controller: 'ProjectCtrl'
    }).
    when('/projects/:id/edit', {
        templateUrl: 'partials/project/project-edit.html',
        controller: 'ProjectCtrl'
    }).
    when('/users', {
        templateUrl: 'partials/user/user-list.html',
        controller: 'UserListCtrl'
    }).
    when('/users/new', {
        templateUrl: 'partials/user/user-new.html',
        controller: 'UserCtrl'
    }).
    when('/users/:id/edit', {
        templateUrl: 'partials/user/user-edit.html',
        controller: 'UserCtrl'
    }).
    otherwise({
        redirectTo: '/login'
    });
  }]);