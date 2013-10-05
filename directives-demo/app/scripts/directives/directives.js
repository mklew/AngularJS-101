'use strict'; 

var appDirectives = angular.module('app.directives', []).directive('formGroup', function(){
	return {
		templateUrl : 'scripts/directives/form-group-tpl.html',
		restrict : 'E',
		transclude : true,
		require : '^form',
		scope : true,
		link : function(scope, element, attrs, ctrl) {
			scope.for = attrs.for;
			scope.f = ctrl;
		}
	}
});

appDirectives.directive('anchor', function(){
	return {
		restrict : 'E',
		replace : true,
		transclude : true,
		template : '<a class="btn btn-default" ng-transclude></a>'
	}
})
