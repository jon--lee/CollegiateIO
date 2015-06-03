/*
	@author Jonathan N. Lee
	@created May 2015
	some sort of college page that should have details.
 */ 
module.exports = function () {
    
    this.get = function(req, res)
    {
    	res.send("new and improved college page");
    }
};