angular.module('traducoDirectives', [])
.directive('traducoUserEdit', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/user/user-tpl.html'
	};
})
.directive('traducoProjectEdit', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/project/project-tpl.html'
	};
});