module.exports = function(app) {	//  nText app by Dan McKeown | http://danmckeown.info/code/ntext
	var texts = require('../controllers/texts.js');

	app.get('/text/getAllTexts', function(request, response){
		console.log("routes -> get /text/getAllTexts");
		texts.getAllTexts(request, response);
	})
	app.post('/text/addText', function(request, response){
		console.log("routes -> get /text/getText | Request body:", request.body);
		texts.addText(request, response);
	})
	app.get('/text/getText', function(req, res) {
    	var key_id = req.params.text_id;
		console.log('routes -> get /text/getText');
		console.log("Server- ", req.body);
		texts.getText(req, res);
  	});
	app.post('/text/getText', function(req, res) {
    	var key_id = req.body.text_id;
		console.log('routes -> post /text/getText');
		console.log("Server- ", req.body);
		texts.getTP(req, res);
  	});
	app.post('/text/destroyText', function(req, res) {
    	var key_id = req.body.text_id;
		console.log('routes -> post /text/destroyText');
		console.log("Requst body:", req.body);
		texts.killT(req, res);
  	});
	app.post('/text/updateText', function(req, res) {
    	var key_id = req.body.text_id;
		console.log('routes -> post /text/updateText');
		console.log("Server- Update Text - Request object:", req.body);
		texts.addText(req, res);
  	});
};
