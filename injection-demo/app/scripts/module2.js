'use strict';

var module2 = angular.module('module2', []);

module2.constant('Module2Constant', "This is constant from " + 
	" module named 'module2' defined in module2.js");

module2.constant('NameClash', 'Winner is Module2');