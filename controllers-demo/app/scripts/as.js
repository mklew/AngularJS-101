'use strict';

// Lesson 2 controller-as syntax
var appAs = angular.module('app.as', []);

appAs.controller('OuterCtrl', function(){
	this.name = "OuterCtrl";
});

appAs.controller('InnerCtrl', function(){
	this.name = 'InnerCtrl';
});