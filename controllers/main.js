/*
	@author Jonathan N. Lee
	@created May 2015
	Home page module that just renders the ejs
	as a response to the page request. Additionally
	sends data to ejs for potential processing and display.
	Data is retreived from the mongoDB.
 */
module.exports = function () {
	var mongoose = require("mongoose");
    var College = require("../models/College");
    
    this.get = function(req, res)
    {
    	College.find(function(err, colleges){
    		if(err) console.log("FROM MAIN: there was an error");
    		else	console.log("FROM MAIN: " + colleges);
    	});
    	res.render("pages/main");
    }
};