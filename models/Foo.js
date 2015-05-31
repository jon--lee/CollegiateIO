module.exports = function(name, age){
	this.age = age;
	this.name = name;

	this.setAge = function(age)
	{
		this.age = age;
	}

	this.setName = function(name)
	{
		this.name = name;
	}

	this.stringify = function()
	{
		return "This dog's name is " + this.name + " and he/she is " + this.age + " years old";
	}

	
}