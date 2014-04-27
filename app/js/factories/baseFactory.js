var traducoFactories = angular.module('traducoFactories', []);

// angular.module('monApp', ['ngResource'])
traducoFactories.factory('BaseFactory', [
	function(){
		this.baseUrl = 'http://localhost:3000/';
		return this;
	}
]);