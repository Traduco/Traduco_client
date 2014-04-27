var traducoFactories = angular.module('traducoFactories');

// angular.module('monApp', ['ngResource'])
traducoFactories.factory('UserFactory', ['BaseFactory', '$resource',
	function(BaseFactory, $resource){
	  	return $resource(BaseFactory.baseUrl + 'projects/:userId', {userId:'@id'},
	    {
	      'update': {method: 'PUT'},
	      'query': {isArray: false, headers: {'Access-Control-Request-Method':'GET', 'Access-Control-Expose-Headers':'x-json'}}
	    }
	  );
	}
]);