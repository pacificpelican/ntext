mainModule.controller('defaultController', function($scope, $routeParams, $location, defaultFactory) {
//  nText app by Dan McKeown | http://danmckeown.info/code/ntext
	var getAllTexts = function(){
		console.log("Controller - getAllTexts");
		defaultFactory.getAllTexts(function(texts){
			console.log("controller [getAllTexts] -> Factory, about to put texts in $scope.texts");
			console.log(texts);
			$scope.texts = texts;
		});
	}

	getAllTexts();

	$scope.addText = function(newText){
		console.log('working in controller');
		console.log(newText);
		defaultFactory.addText(newText,function(text){
			if(text.errors)
			{
				$scope.errors = text.errors;
			}
			else
			{
				$scope.errors = {};
				$scope.newText = {};
				defaultFactory.getAllTexts(function(texts){
					console.log("controller [addText] -> Factory, about to add text to DB");
					$scope.texts = texts;
					$scope.newText = {};
				});
			$location.path('/');
			}
		});
	}

	$scope.destroyText = function(text){
		console.log("Controller - destroyText");
		defaultFactory.destroyText(text, function(){
			defaultFactory.getAllTexts(function(texts){
				console.log("controller [destroyText] -> Factory, about to delete text");
				$scope.texts = texts;
			});
		});
	}

});
