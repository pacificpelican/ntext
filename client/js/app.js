var mainModule = angular.module('mainModule', ['ngRoute']);
//  nText app by Dan McKeown | http://danmckeown.info/code/ntext
mainModule.filter('reverse', function() {
  return function(texts) {
    if (!texts || !texts.length) { return; }
    return texts.slice().reverse();
  };
});
//  This file contains the front-end routes
mainModule.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/defaultPartial.html',
		controller: "defaultController"
	})
	.when('/secondPartial', {
		templateUrl: 'partials/secondaryDefaultPartial.html',
		controller: "defaultController"
	})
	.when('/text/show/:ID', {
		templateUrl: 'partials/oneText.html',
		controller: "textController"
	})
    .when('/text/edit/:ID', {
		templateUrl: 'partials/oneTextEdit.html',
		controller: "textController"
	})
	.otherwise({
		redirectTo: '/'
	});
});
