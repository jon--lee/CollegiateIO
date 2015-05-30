/*
	list of dependencies.
 */
var express = require("express");
var mongoose = require("mongoose");




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


/*
	All routes should be listed here. The 'link' attribute
	refers to the relative link in the url that the page should be on.
	The 'controller' refers to relative path the controller that handles
	the page. These are later passed to a method to set the route.
 */
var routes = [
	{
		link: '/',
		controller:'./controllers/main'
	},
	{
		link: '/college',
		controller:'./controllers/college'
	}
];

for (var i = 0; i < routes.length; i++)
{
	var route = routes[i];
	setRoute(route.link, route.controller);
}



/*
	method: setRoute
	The purpose of this method is to set the routes that connect
	the links of the pages with the relative links of the controllers.
	@param link
	@param controller
 */
function setRoute(link, controller)
{
	app.get(link, function(req, res){
		require(controller)(req, res);
	});
}

/*
	The purpose of this code block is to initiate the server
	that listening for page requests. This uses the specified port
	to do so (may be local or on heroku)
 */
app.listen(port, function(){
	console.log("running on http://localhost:" + port);
});


