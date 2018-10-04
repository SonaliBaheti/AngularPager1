var myapp=angular.module('myApp',["ngRoute"]);

myapp.config(function($routeProvider){

	$routeProvider
	.when('/',{
		templateUrl:'register.html'
	})
	.when('/login',{
		template:'login.html'
	})
	.otherwise({redirectTo:'/'});
});