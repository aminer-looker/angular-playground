app = angular.module('app', ['ngAnimate']);

app.controller('PresidentsController', function($scope) {
	$scope.presidents = [
		{ name:'G.Washington', url:'images/washington.jpeg' },
		{ name:'J.Adams', url:'images/adams1.jpeg' },
		{ name:'T.Jefferson', url:'images/jefferson.jpeg' },
		{ name:'J.Madison', url:'images/madison.jpeg' },
		{ name:'J.Monroe', url:'images/monroe.jpeg' },
		{ name:'J.Q.Adams', url:'images/adams2.jpeg' },
		{ name:'A.Jackson', url:'images/jackson.jpeg' },
		{ name:'M.VanBuren', url:'images/vanburen.jpeg' },
		{ name:'W.H.Harrison', url:'images/harrison.jpeg' },
		{ name:'Z.Taylor', url:'images/tyler.jpeg' }
	];
	
	this.select = function(index) {
		$scope.selection = $scope.presidents[index];
	};
	
	this.select(0);
});

app.directive('portrait'), function() {
	
});

app.directive('thumbnailPanel', function() {
	return {
		link: ($scope, $el, attr) {
			$scope.selection
		},
		restrict: 'E',
		scope: {
			president: "=",
			select: "&"
			skip: "="
		},
		templateUrl: 'thumbnail-panel.html'
	};
});
