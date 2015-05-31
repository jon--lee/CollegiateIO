/*
	list of 3rd party dependencies.
 */
var express = require("express");
var mongoose = require("mongoose");

/*
	controller imports
 */
var mainPage = require("./controllers/main");
var collegePage = require("./controllers/college");


var app = express();								// express for server control
var port = process.env.PORT || 8080;				// set port to default for process port (heroku) or local 8080

app.use(express.static(__dirname + "/public"));		// set the public static directory for css, images, front-end js
app.set("view engine", "ejs");						// enable ejs functionality for template control


/*
	Connection to the mongodb using mongoose. URI is determined by
	the heroku process or locally. connection gives error or success
	notifications.
 */
var mongooseUri = 	process.env.MONGOLAB_URI ||
					process.env.MONGOHQ_URL ||
					'mongodb://localhost:27017/test';

mongoose.connect(mongooseUri, function (err, res) {
	if (err) {
	console.log ('ERROR connecting to: ' + mongooseUri + '. ' + err);
	} else {
	console.log ('Succeeded connected to: ' + mongooseUri);
	}
});

app.get('/', mainPage);
app.get('/college', collegePage);


app.listen(port, function(){
	console.log("running on http://localhost:" + port);
});


