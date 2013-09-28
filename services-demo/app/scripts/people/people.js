'use strict';

// Lesson 1 - how to use controllers
var appPeople = angular.module('app.people', ['app.services']);

/**
	Scope hierarchy:
		$rootScope
			PeopleAppCtrl scope
				PeopleCtrl
					PersonCtrl
					PersonCtrl
					...
					PersonCtrl
*/

appPeople.controller('PeopleAppCtrl', ['$scope', function($scope){
	$scope.controllerName = 'PeopleAppCtrl';

	$scope.alertMe = function(msg) {
		alert(msg);
	}
}]);

appPeople.controller('PeopleCtrl', ['$scope', 'BasicService', 
	function($scope, BasicService){
	
	$scope.controllerName = 'PeopleCtrl';
	/**
		Model is usually retrieved from some kind of service
	*/
	var people = BasicService.getPeople();

	$scope.people = people;

	$scope.countPeople = function() {
		return BasicService.countPeople();
	}
}]);

appPeople.controller('PersonCtrl', ['$scope',  function($scope){
	$scope.down = true;
}]);

appPeople.controller('PersonCtrlLesson2', ['$scope', 'PersonServiceFactory',
 function($scope, PersonServiceFactory){	
	var personService = PersonServiceFactory.getPersonService($scope.person);
	
	$scope.fullName = personService.fullName();

	$scope.down = true;
}]);


appPeople.config(['PersonFullNamePrinterServiceProvider', function(printerProvider){
	printerProvider.setSeparator(' ### ');
}])

appPeople.controller('PersonCtrlLesson3', ['$scope', 
	'PersonFullNamePrinterService',
 function($scope, PersonFullNamePrinterService) {	
	
	$scope.fullName = PersonFullNamePrinterService($scope.person);

	$scope.down = true;

}]);





