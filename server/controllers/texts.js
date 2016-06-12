var nedb = require('nedb');
//	var Texts = new nedb({ filename: './db/ntext.json', autoload: true });
//	var Texts = new nedb({ filename: './db/ntext.json'});
	var Texts = new nedb({ filename: `${__dirname}/../../db/ntext.json`, autoload: true });

//  nText app by Dan McKeown | http://danmckeown.info/code/ntext
module.exports = (function(app) {
	return {
		getAllTexts: function(request, response) {
			Texts.find({}, function(err, data){
				if (err)	console.log("error", err);
				else response.json(data);
			})
		},
		addText: function(request, response) {
			var newText = { text: request.body.text, created_at: request.body.created_at };
			console.log('looking to add to db');

			Texts.insert(newText, function(err, doc) {
				if (err) {
					console.log("ERROR.");
					response.json(err);
				}
				else {
					console.log('Inserted', doc.text, 'with ID', doc._id);
					response.json(doc);
				}
			});
		},
		addUpdateText: function(request, response){
			var newText = new Text({ text: request.body.text });
			newText.insert(function(err, record){
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
		getText: function(request, response) {
			console.log("gettext function running");
			console.log(the_key);
			console.log(request.param);
			var texts_id = request.param.text_id;
			Texts.findOne({ '_id': ObjectId(texts_id) }, function (err, data) {
				if (err) {
					console.log("Error.");
					console.log("ERR");
				}
				else {
					response.json(data);
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
			Texts.findOne({ '_id': the_id_text }, function (err, data) {
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

			Texts.remove({ '_id': end_id }, {}, function(err, numDeleted) {
				if (err) {
					console.log("Error.");
					console.log(err);
				}
				else {
					console.log('Deleted', numDeleted, 'text(s)');
					response.json(numDeleted);
				}
			});
		},
	}
})();
