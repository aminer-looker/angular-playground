thistle = angular.module('thistle', ['ngAnimate']);

thistle.controller('TabbedPanelController', function($scope) {
	$scope.tabs = [];
	
	this.addTab = function(tabScope) {
		$scope.tabs.push(tabScope);
	};
	
	this.changeTo = function(name) {
		angular.forEach($scope.tabs, function(tab) {
			tab.selected = (tab.title === name);
		});
	};
})

thistle.directive('exTabbedPanel', function() {
	return {
		controller: "TabbedPanelController as controller",
		link: function($scope, $el, attrs) {
			$scope.controller.changeTo(attrs.initialTab);
		},
		restrict: 'E',
		scope: {},
		templateUrl: "tabbed-panel.html",
		transclude: true
	}
});

thistle.directive('exTab', function() {
	return {
		link: function($scope, $el, attrs, parentController) {
			$scope.title = attrs.title
			$scope.color = attrs.color
			parentController.addTab($scope);
			
			$el.css('background', $scope.color);
		},
		require: '^exTabbedPanel',
		restrict: 'E',
		scope: {
			color: "@",
			title: "@"
		},
		templateUrl: "tab-pane.html",
		transclude: true
	};
});
