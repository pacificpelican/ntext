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

	factory.getText = function(text, callback){	//	Currently app doesn't use
		console.log("##!#! , ", text);
		$http({
		    url: '/text/getText',
		    method: "GET",
		    params: {text_id: text}
		 }).success(function(returned_data_from_server){
			console.log("SUCCESSFUL - BACK TO FACTORY FROM GETTING TEXT", returned_data_from_server);
			callback(returned_data_from_server);
		})
	}

	factory.getTextP = function(text, callback){	//	Currently app uses this
		console.log("id:", text);				//	Post not Get
		$http({
		    url: '/text/getText',
		    method: "POST",
		    data: {text}
		 }).success(function(returned_data_from_server){
			console.log("SUCCESSFUL - BACK TO FACTORY FROM GETTING TEXT", returned_data_from_server);
			callback(returned_data_from_server);
		})
	}

	factory.updateText = function(text, callback){	//	Currently not used
		$http.post('/text/updateText', text).success(function(returned_data_from_server){
			console.log("SUCCESSFUL - BACK TO FACTORY FROM UPDATING TEXT", returned_data_from_server);
			callback(returned_data_from_server);
		});
	} // 'edit' button actually leads to new post form with old text pre-filled

	return factory;
});
