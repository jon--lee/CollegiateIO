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

    	// Query the colleges selecting on the name (id is included)
    	// upon any error, the dbError page is rendered, otherwise
    	// the list of colleges is passed to the view
    	College.find().select("name").exec(function(err, colleges)
    	{
    		if(err)
    		{
    			res.render("pages/dbError")
    		}
    		else
    		{
    			res.render("pages/main", colleges);
    		}
    	});
    }
};