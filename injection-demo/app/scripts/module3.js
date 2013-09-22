'use strict';

var module3 = angular.module('module3', ['module3dep']);

module3.constant('Module3Constant', "This is constant from " + 
	" module named 'module3' defined in module3.js");

module3.constant('NameClash', 'Winner is Module3');

angular.module('module3dep', [])
.constant('module3depConstant', "module3DepConstant from module3.js");