var appModule = angular.module("app", ["ngRoute"]);

appModule.config(function ($routeProvider, $locationProvider) {
	$routeProvider.when("/home", {
		templateUrl: "home.html",
		controller: "HomeController"
	}).when("/homework", {
		templateUrl: "homework.html",
		controller: "HomeworkController"
	}).when("profile", {
		templateUrl: "profile.html",
		controller: "ProfileController"
	}).otherwise({
		redirectTo: "/home"
	});
})