//This is an object

var foo = {};

//It is also the equivalent of a C# dictionary - there are NO dictionaries in JavaScript. You don't need them.

//You can declare an objects properties when you define it
foo = {
	x: 1,
	y: 2
};

console.log(foo);

//Or afterwards

foo = {};

foo.x = 5;

console.log(foo);
console.log(foo.x);
console.log(foo["x"]);