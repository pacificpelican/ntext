mainModule.factory('defaultFactory', function($http) {
	var factory = {};
	var texts = [];

	factory.getAllTexts = function(callback){
		console.log("Factory - getAllTexts");console.log("Executing $http.get getAllTexts");
		$http.get('/text/getAllTexts').success(function(returned_data_from_server){
			console.log("Server responded with: ", returned_data_from_server);
			callback(returned_data_from_server);
		});
	}

	factory.addText = function(newText, callback){	//	used to create posts
		$http.post('/text/addText', newText).success(function(returned_data_from_server){
			console.log("SUCCESSFUL - BACK TO FACTORY", returned_data_from_server);
			callback(returned_data_from_server);
		});
		console.log("addText in Factory, text is : ", newText);
	}	//	this method also used in 'edit' pattern, creating a new record

	factory.destroyText = function(text, callback){
		$http.post('/text/destroyText', text).success(function(returned_data_from_server){
			console.log("SUCCESSFUL - BACK TO FACTORY FROM DELETING TEXT", returned_data_from_server);
			callback(returned_data_from_server);
		});
	}

	factory.getTextP = function(text, callback){	//	Post not Get
		console.log("id:", text);
		$http({
		    url: '/text/getText',
		    method: "POST",
		    data: {text}
		 }).success(function(returned_data_from_server){
			console.log("SUCCESSFUL - BACK TO FACTORY FROM GETTING TEXT", returned_data_from_server);
			callback(returned_data_from_server);
		})
	}

	return factory;
});
