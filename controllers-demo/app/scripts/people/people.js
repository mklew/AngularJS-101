'use strict';

var appPeople = angular.module('app.people', []);

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
}]);

appPeople.controller('PeopleCtrl', ['$scope', function($scope){
	$scope.controllerName = 'PeopleCtrl';

	/**
		Model is usually retrieved from some kind of service
	*/
	var model = {
		people : [
			{id : 1, name : 'Kate', last : 'Smith', job : 'Finance'},
			{id : 2, name : 'Tom', last : 'Brown', job : 'IT'},
			{id : 3, name : 'John', last : 'Lock', job : 'Lost'},
			{id : 4, name : 'Paul', last : 'Alien', job : 'Entertainment'}
		]
	}

	$scope.people = model.people;

	$scope.countPeople = function() {
		return model.people.length;
	}
}]);

appPeople.controller('PersonCtrl', ['$scope', function($scope){
	$scope.controllerName = 'PersonCtrl of ' + $scope.person.name;
	$scope.down = true;
}]);