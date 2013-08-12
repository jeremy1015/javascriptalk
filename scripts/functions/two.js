//You can put them in objects, right next to other variables...
var foo = {
	name: "Jeremy",
	greet: function(){
		return "Hello " + this.name;
	}
};

console.log(foo.greet());

//You can also assign them to existing objects

var talk = function(){
	return "Hello " + this.name;
};

foo = {
	name: "Jeremy"
};

foo.sayHi = talk;
console.log(foo.sayHi());