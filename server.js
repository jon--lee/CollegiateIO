/*
	list of 3rd party dependencies.
 */
var express = require("express");
//var mongoose = require("mongoose");

/*
	Any controllers and/or internal dependencies
*/
var Router = require("./router");
var db = require("./db");

/*
	models import
 */
var College = require("./models/College");




var app = express();								// express for server control
var port = process.env.PORT || 8080;				// set port to default for process port (heroku) or local 8080

app.use(express.static(__dirname + "/public"));		// set the public static directory for css, images, front-end js
app.set("view engine", "ejs");						// enable ejs functionality for template control

var router = new Router(app);
router.route();

db.connect();





/*
	Connection to the mongodb using mongoose. URI is determined by
	the heroku process or locally. connection gives error or success
	notifications.
 */
/*var mongooseUri = 	process.env.MONGOLAB_URI ||
					process.env.MONGOHQ_URL ||
					'mongodb://localhost:27017/test';

mongoose.connect(mongooseUri, function (err, res) {
	if (err) {
	//console.log ('***************ERROR connecting to: ' + mongooseUri + '. ' + err);
	} else {
	//console.log ('**************Succeeded connected to: ' + mongooseUri);
	}
});
/*
	end of code block that involves connection with mongoose.
 */ 













/*var berkeley = new College({
	name: "Uc Berkeley",
	address: "3515 oliver ct. lafayette ca"
});

var stanford = new College({
	name: "Stanford",
	address: "500 saratoga ave. san jose ca"
})

console.log("first college: " + berkeley.name + " with id: " + berkeley._id);
console.log("other college: " + stanford.name + "with id: " + stanford._id);

/*berkeley.save(function(err){
	if(err)
	{
		console.log("there was some sort of error with saving everything!");
	}
	else
	{
		console.log("SUCCESS WITH SAVING DATA");
	}
});*/

/*console.log("\n");

College.find(function(err, colleges){
	if(err)
	{
		console.log("error! HELLOOOO!!!");
	}
	else
	{
		console.log("here they are: \n" + colleges);
	}
});*/








router.run(port);
/*
	establish the server access by listening at the specified port.
	output to console with information about the specific port.
 
app.listen(port, function(){
	console.log("running on http://localhost:" + port);
});
*/

