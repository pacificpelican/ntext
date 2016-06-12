var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
//	This page is for launcing the nText app on a local server: npm run start
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));

require('./server/config/nedb.js');
require('./server/config/routes.js')(app);

app.listen(7387, function(){
	console.log("Server is running at 7387");
})
