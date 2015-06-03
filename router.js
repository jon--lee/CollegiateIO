/*
	@author Jonathan N. Lee
	@created Jun 2015

	The purpose of this module is to handle all the routing procedures
	and app server processes. Initially, this method requires an express
	app object which is used to start the server and declare the page
	routing.
 */
module.exports = function(app){
	this.app = app;

	/*
		method: route
		import the controllers for routing.
		actually route each page uri request with the controller that handles
		it using the express app.
	 */
	this.route = function()
	{
		var mainPage = new (require("./controllers/main"))();
		var collegePage = new (require("./controllers/college"))();
		var aboutPage = new (require("./controllers/about"))();

		this.app.get('/', mainPage.get);
		this.app.get('/college', collegePage.get);
		this.app.get('/about', aboutPage.get);
	}
	
	/*
		run the server by using the express app to listen at the port
		given in the argument. Output to console the exact address that
		the server is running on.
	 */
	this.run = function(port)
	{
		this.app.listen(port, function()
		{
			console.log("running on http://localhost:" + port);
		});
	}
};