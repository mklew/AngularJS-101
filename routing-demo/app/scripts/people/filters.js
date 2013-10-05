'use strict';

angular.module('app.people').filter('awesomeIT', function(){

	return function(text) {
		if(/IT/.test(text))
		{
			return text + " - that's AWESOME";
		}
		else {
			return text;
		}
	}
}).filter('camelCase', function(){
	return function(text) {
		var arr = text.split('');
		arr[0] = arr[0].toUpperCase();
		return arr.join('');
	}
})