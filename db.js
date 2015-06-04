var mongoose = require("mongoose");
var College = require("./models/College");

/*
	method: connect
	connects to the mongo database. Determines
	the uri for the database as well (could be determined by heroku
	otherwise local). Once the connection is done, any testing can be
	done within the "if(!err)" code block (this avoids the issue of a
	slow connection where code following the call to this method is 
	executed before the connection is established)
 */
exports.connect = function()
{
	var mongooseUri = 	process.env.MONGOLAB_URI ||
						process.env.MONGOHQ_URL ||
						'mongodb://localhost:27017/test';

	mongoose.connect(mongooseUri, function (err, res)
	{
		if (!err)
		{
			console.log("success connecting to db");
		}
		else
		{
			console.log("connection to db FAILED");
		}
		
		//if (err)	console.log ('***************ERROR connecting to: ' + mongooseUri + '. ' + err);
		//else		console.log ('**************Succeeded connected to: ' + mongooseUri);
	});
}



/*
	method: loadData
	This is only being used as dummy data.
	So don't touch it unless you want to
	fill more or less dummy data.
 */
exports.loadData = function()
{
	var berkeley = new College({
		name: "UC Berkeley",
		address: "3515 Oliver Ct. Lafayette, CA",
		phoneNumber: "000-000-0000",
		imageUri: "default.png"
	});

	var stanford = new College({
		name: "Stanford University",
		address: "500 Saratoga Ave. San Jose, CA",
		phoneNumber: "000-000-0000",
		imageUri: "default.png"
	});

	var brown = new College({
		name: "Brown University",
		address: "3515 Oliver Ct. Providence, RI",
		phoneNumber: "000-000-0000",
		imageUri: "default.png"
	});

	berkeley.save();
	stanford.save();
	brown.save();
}

exports.deleteDatabase = function()
{
	mongoose.connection.db.dropDatabase();		//should work, not tested
}
