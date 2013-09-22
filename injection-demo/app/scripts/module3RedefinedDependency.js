'use strict';

// whole module is redefined, if module3depConstant is missing then error is raised

angular.module('module3dep', [])
.constant('module3depConstant', "module3DepConstant from module3RedefinedDepenency.js");
