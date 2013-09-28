'use strict';
var demoUtils = angular.module('demo.utils', [])

demoUtils.directive('block', function(){
	return {
		template : '<div class="block"></div>'
	}
})