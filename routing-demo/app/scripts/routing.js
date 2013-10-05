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
		.when('/people/add' , {
			templateUrl : 'views/people/people-add.html',
			controller : 'PeopleAddCtrl'
		})
		.when('/people/:id/edit', {
			templateUrl : 'views/people/people-edit.html',
			resolve : {
				person : function($route, BasicService, $timeout){
					return $timeout(function(){
						return BasicService.getPerson($route.current.params.id)
					}, 1000);		
				}
			},
			controller : 'PeopleEditCtrl'
		})
		.otherwise({
			redirectTo : '/'
		})
})
