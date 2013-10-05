'use strict';

angular.module('app.people').controller('PeopleAddCtrl', function($scope, BasicService){
	$scope.addPerson = function(person) {
		BasicService.addPerson(person).then(function(){
			$scope.result = {
				success : true
			}
		}, function() {
			$scope.result = {
				error : true
			}
		});
	}
});