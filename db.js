var mongoose = require("mongoose");

exports.connect = function()
{
	/*
		Connection to the mongodb using mongoose. URI is determined by
		the heroku process or locally. connection gives error or success
		notifications.
	 */
	var mongooseUri = 	process.env.MONGOLAB_URI ||
						process.env.MONGOHQ_URL ||
						'mongodb://localhost:27017/test';

	mongoose.connect(mongooseUri, function (err, res)
	{
		if (!err)	console.log("success connecting to db");
		else		console.log("connection to db FAILED");
	});
}