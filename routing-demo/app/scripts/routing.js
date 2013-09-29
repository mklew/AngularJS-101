'use strict';

var routing = angular.module('app.routing', ['ngRoute' ,'app.people']);


routing.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : 'views/home.html'
		})
		.when('/people', {
			templateUrl : 'views/people/people-list.html'
		})
		.otherwise({
			redirectTo : '/'
		})
})