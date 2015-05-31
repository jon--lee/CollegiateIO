/*
	list of 3rd party dependencies.
 */
var express = require("express");
var mongoose = require("mongoose");

/*
	controller imports for routing
 */
var mainPage = require("./controllers/main");
var collegePage = require("./controllers/college");
var aboutPage = require("./controllers/about");

/*
	models import
 */
var CollegeTemplate = require("./models/CollegeTemplate");
var template = new CollegeTemplate(mongoose);




var app = express();								// express for server control
var port = process.env.PORT || 8080;				// set port to default for process port (heroku) or local 8080

app.use(express.static(__dirname + "/public"));		// set the public static directory for css, images, front-end js
app.set("view engine", "ejs");						// enable ejs functionality for template control

/*
	actually routing for each page uri request, handled by external
	files in the controller directory.
 */
app.get('/', mainPage);
app.get('/college', collegePage);
app.get('/about', aboutPage);


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
	console.log ('***************ERROR connecting to: ' + mongooseUri + '. ' + err);
	} else {
	console.log ('**************Succeeded connected to: ' + mongooseUri);
	}
});




/*var Dog = require("./models/Foo.js");
var dancer = new Dog("dancer", 10);
var mozie = new Dog("mozie", 7);

console.log(dancer.stringify());
dancer.setAge(20);
console.log(dancer.stringify());*/


app.listen(port, function(){
	console.log("running on http://localhost:" + port);
});


