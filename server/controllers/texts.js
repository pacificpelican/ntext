var mongoose = require('mongoose');
var Text = mongoose.model('Text');
//  nText app by Dan McKeown | http://danmckeown.info/code/ntext
module.exports = (function(app) {
	return {
		getAllTexts: function(request, response){
			Text.find({}, function(err, data){
				if (err)	console.log("error", err);
				else response.json(data);
			})
		},
		addText: function(request, response){
			var newText = new Text({ text: request.body.text });
			newText.save(function(err, record){
				if (err) {
					response.json(err);
				}
				else {
					response.json(record);
				}
			})
		},
		destroyText: function(request, response){
			console.log(request.body._id);
			Text.remove({ _id: request.body._id }, function (err, status) {
				if (err) {
					console.log("ERR");
				}
				else {
					response.json({status:'success'});
				}
			})
		},
		getTP: function(request, response) {
			console.log("gettext post - getTP function running");
			console.log(request.body);
			var texts_id = request.body
			var the_id = texts_id;
			for (var nn in the_id) {
				console.log(nn);
			}
			var obj = the_id;
			for (var prop in obj) {
  				console.log("obj." + prop + " = " + obj[prop]);
			}
			var the_id_text = the_id.text;
			console.log('id to find: ' + the_id_text);
			Text.findById(the_id_text, function (err, data) {
				if (err) {
					console.log("Error.");
					console.log(err);
				}
				else {
					response.json(data);
				}
			})
		},
		killT: function(request, response) {
			console.log("gettext post function running");
			console.log(request.body);
			var texts_id = request.body
			var the_id = texts_id;
			for (var nn in the_id) {
				console.log(nn);
			}
			var obj = the_id;
			var end_id;
			for (var prop in obj) {
  				console.log("obj." + prop + " = " + obj[prop]);
				if (prop === '_id') {
					end_id = obj[prop];
				}
			}
			console.log('__id to find: ' + end_id);
			var the_id_text = the_id.text;
			var newConnect = Text.findById(the_id);
			newConnect.remove(the_id_text, function (err, data) {
			if (err) {
		 		console.log("Error.");
				console.log(err);
	 		}
		 	else {
		 		response.json(data);
		 	}
		 })
		},
	}
})();
