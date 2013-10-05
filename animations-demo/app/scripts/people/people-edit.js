'use strict';

angular.module('app.people').controller('PeopleEditCtrl', function($scope, BasicService, person){

	var original = person;

	function addCopyOfPersonToScope() {
		$scope.person = angular.copy(original);	
	}

	addCopyOfPersonToScope()
	

	$scope.editPerson = function(p) {
		BasicService.updatePerson(p).then(function(){
			original = p;
			$scope.result = {
				success : true
			}
		}, function() {
			$scope.result = {
				error : true
			}
		});
	}

	$scope.cancelChanges = function() {
		addCopyOfPersonToScope()
	}

	$scope.isModified = function(person) {
		return !angular.equals(original, person);
	}
})