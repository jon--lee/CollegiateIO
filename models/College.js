
var mongoose = require('mongoose');

var CollegeSchema = new mongoose.Schema({
	name: {type: String, required: true},
	address: String,
	phoneNumber: String,
	imageUri: String
});

module.exports = mongoose.model("College", CollegeSchema);


/*module.exports = function(mongoose){
	this.mongoose = mongoose;

	this.model = function()
	{
		collegeSchema = this.mongoose.Schema(
		{
			name: String
		});
		console.log("returning model");
		return mongoose.model('College', collegeSchema);
	}
}

/*exports.schema = function()
{
	console.log("processed: " + this.world);
}*/