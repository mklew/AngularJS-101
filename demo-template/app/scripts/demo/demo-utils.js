'use strict';
var demoUtils = angular.module('demo.utils', [])

demoUtils.directive('block', function(){
	return {
		template : '<div class="block"></div>'
	}
})

demoUtils.directive('timer', ['$timeout', '$window', function($timeout, $window){
	return {
		templateUrl : 'scripts/demo/timer-tpl.html',
		restrict : 'E',
		scope : {
			key : '@',
			minutes : '@'
		},
		link : function(scope, element, attrs) {
			scope.noTimeLeft = false;
			var secondsLeft = scope.minutes * 60;
			var secondsGone = $window.parseInt(getSecondsGone() || 0);

			scope.percent = function() {
				var value = secondsGone / secondsLeft * 100;
				if (value > 100) {
					value = 100;
					scope.noTimeLeft = true;
				}				
				return value
			};

			scope.refreshTimer = function() {
				secondsGone = 0;
				scope.noTimeLeft = false;
			}

			function tick(){
				secondsGone += 1;
				saveSecondsGone(secondsGone);
				$timeout(tick, 1000);
			}
			tick();

			function saveSecondsGone(seconds) {
				$window.localStorage.setItem(scope.key, seconds);
			}

			function getSecondsGone() {
				return $window.localStorage.getItem(scope.key);
			}
		}
	}
}]);