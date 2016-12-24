var app = angular.module('viperdev', [])
app.controller('Tab',  function($scope){
	$scope.tab = 1;
	$scope.isSet = function (stab) {
		return $scope.tab == stab
	}
	$scope.setTab = function (stab) {
		$scope.tab = stab 
	}
})