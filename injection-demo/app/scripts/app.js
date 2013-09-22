'use strict';

// Order of dependencies matters only when there is name clash in what they can provide
// in this example its constant named 'NameClash'
var app = angular.module("app", ['module1', 'module2', 'module3']);


// Ex 1
// Module run blocks are run after injector is done loading all the modules. Line 3007 in Angular
// DependencyInjection is done by name
app.run(['$rootScope', 'Module1Constant', 'Module2Constant',
	'Module3Constant', 'NameClash',
 function($rootScope, Module1Constant, Module2Constant, Module3Constant, NameClash){
	$rootScope.m1c = Module1Constant;
	$rootScope.m2c = Module2Constant;
	$rootScope.m3c = Module3Constant;
}]);

// Ex 2
app.run(function($rootScope, NameClash){
	$rootScope.clashed = NameClash;
})

// Ex 3
app.run(function($rootScope, module3depConstant){
	$rootScope.module3depConstant = module3depConstant;
})