var traducoApp = angular.module('traducoApp', [
  'ngRoute',
  'traducoControllers'
]);
 
traducoApp.config(['$routeProvider', '$httpProvider',
  function($routeProvider, $httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = "*";

    // Taking care of routing
    $routeProvider.
      when('/projects', {
        templateUrl: 'partials/project-list.html',
        controller: 'ProjectListCtrl'
      }).
    //   when('/phones/:phoneId', {
    //     templateUrl: 'partials/phone-detail.html',
    //     controller: 'PhoneDetailCtrl'
    //   }).
    otherwise({
      redirectTo: '/login'
    });
  }]);