mainModule.controller('textController', function($scope, $routeParams, $location, defaultFactory) {
//  nText app by Dan McKeown | http://danmckeown.info/code/ntext
	var showText = function(ID){
		$scope.ID = $routeParams.ID;
		var text = $routeParams.ID;
		console.log("requesting (showText) for id:", text);
		defaultFactory.getTextP(text, function(text){
			console.log("-> controller (showText) - TEXT OBJECT IS:", text);
			var $scoopy = text.text;
			$scope.the_id = text._id;
			$scope.the_date = text.created_at;
			$scope.full_text = $scoopy;
			$scope.text = text;
			console.log("controller [showText] <- Factory (getTextP); text: ", $scope.text);
			console.log("text: ", $scoopy);
		});
	}

	showText();

	$scope.updateText = function(tex) {
		console.log("text: " + tex.text);
		var that = tex.text;
		console.log("controller [$scope.updateText] -> Factory (addText)");
		defaultFactory.addText(tex,function(text){
			if(text.errors)
			{
				$scope.errors = text.errors;
			}
			else
			{
				$scope.errors = {};
				$scope.newText = {};
				defaultFactory.getAllTexts(function(texts){
				$scope.texts = texts;
				$scope.newText = {};
				});
			$location.path('/');	//	redirect back home when done editing
			}
		});
	}

});
