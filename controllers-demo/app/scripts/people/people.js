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

}]);

appPeople.controller('PeopleCtrl', ['$scope', function($scope){
	$scope.people = [
		{id : 1, name : 'Kate', last : 'Smith', job : 'Finance'},
		{id : 2, name : 'Tom', last : 'Brown', job : 'IT'},
		{id : 3, name : 'John', last : 'Lock', job : 'Lost'},
		{id : 4, name : 'Paul', last : 'Alien', job : 'Entertainment'}
	]
}]);

appPeople.controller('PersonCtrl', ['$scope', function($scope){

}]);