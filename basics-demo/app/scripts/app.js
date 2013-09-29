'use strict';

var app = angular.module("app", ['demo.utils']);

app.run(function($rootScope){
	$rootScope.model = {
		job : 'IT'
	}

	$rootScope.say = function(msg) {
		alert(msg);
	}

})