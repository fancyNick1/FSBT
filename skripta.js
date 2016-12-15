// angular dokumentacija https://docs.angularjs.org/api

var appModule = angular.module("app", []);

appModule.controller("homeController", function($scope){
	// kod unutar tijela ove funkcije je kod homeController kontrolera

	$scope.prviOperand = "";
	$scope.drugiOperand = "";
	
	$scope.rezultat = function() {
		return parseInt($scope.prviOperand) + parseInt($scope.drugiOperand);
	};

	$scope.isResultBelowHundred = function() {
		return $scope.rezultat() < 100;	
	};
});