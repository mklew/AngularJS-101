'use strict';

var module1 = angular.module('module1', []);

module1.constant('Module1Constant', "This is constant from " + 
	" module named 'module1' defined in module1.js");

module1.constant('NameClash', "Winner is module1");