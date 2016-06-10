mainModule.controller('defaultController', function($scope, $routeParams, $location, defaultFactory) {
//  nText app by Dan McKeown | http://danmckeown.info/code/ntext
	var getAllTexts = function(){
		console.log("Controller - getAllTexts");
		console.log("ontroller [getAllTexts] -> Factory, about to get all texts");
		defaultFactory.getAllTexts(function(texts){
			console.log(texts);
			$scope.texts = texts;
		});
	}

	getAllTexts();

	var showText = function(text){	//	This is not used.
		console.log("show text:", text);
		defaultFactory.getText(text, function(text){
			$scope.text = text.text;
			$scope.the_id = text._id;
			console.log("controller [showText] -> Factory (showText); text: ", $scope.text);
		});
	}	//	See the textController for the method looking up a post

	$scope.addText = function(newText){
		console.log('scope: addText')
		var dt = new Date();
		var utcDate = dt.toUTCString();
		newText.created_at = utcDate;
		console.log('working in controller');
		console.log(newText);
		console.log("controller [addText] -> Factory, about to put text in");
		defaultFactory.addText(newText,function(newText){
			if(newText.errors)
			{
				$scope.errors = text.errors;
				console.log(text.errors);
			}
			else
			{
				$scope.errors = {};
				$scope.newText = {};
				defaultFactory.getAllTexts(function(texts){

					$scope.texts = texts;
					$scope.newText = {};
				});
			$location.path('/');
			}
		});
	}

	$scope.destroyText = function(text){
		console.log("Controller - destroyText: " + text);
		defaultFactory.destroyText(text, function(){
			defaultFactory.getAllTexts(function(texts){
				console.log("controller [destroyText] -> Factory, about to delete text");
				$scope.texts = texts;
			});
		});
	}

});
