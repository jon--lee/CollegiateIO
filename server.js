/*
	import of any 3rd party dependencies.
 */
var express = require("express");					// express module: ground work library for handling server response.


/*
	import for any controllers and/or internal dependencies
*/
var Router = require("./router");					// Router module for handling routes and requests
var db = require("./db");							// database module for handling connection and other database overhead


/*
	import for models
 */
var College = require("./models/College");			//model for college collection for mongoose



/*
	Handling of server processes
 */
var app = express();								// express for server control
var port = process.env.PORT || 8080;				// set port to default for process port (heroku) or local 8080

app.use(express.static(__dirname + "/public"));		// set the public static directory for css, images, front-end js
app.set("view engine", "ejs");						// enable ejs functionality for template control

var router = new Router(app);						// router to route the request made by client (and any othe interaction with controllers)
router.route();										// assign the routings for requests

db.connect();


router.run(port);									// listen at the specified port (either local or heroku)


