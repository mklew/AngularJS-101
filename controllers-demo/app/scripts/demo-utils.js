'use strict';
var demoUtils = angular.module('demo.utils', [])

demoUtils.directive('block', function(){
	return {
		restrict : 'E',
		template : '<div class="block"></div>'
	}
})