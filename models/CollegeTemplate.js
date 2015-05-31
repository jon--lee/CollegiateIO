
module.exports = function(mongoose){
	this.mongoose = mongoose;

	this.schema = function()
	{
		collegeSchema = this.mongoose.Schema(
		{
			id: {type: Number, required: true},
			name: String
		});
	}
}

/*exports.schema = function()
{
	console.log("processed: " + this.world);
}*/