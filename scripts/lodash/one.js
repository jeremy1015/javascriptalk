//Partial application using lodash

//Let's use lodash
var _ = require("lodash");

//First, what if you want to do partial application on a function that doesn't allow it?
var add = function(a,b){
	return a + b;
};

//You can still partial apply it

var partialAdd = function(a){
	return function(b){
		return add(a,b);
	};
};

var addFive = partialAdd(5);

console.log(addFive(10));

//We can genericize this to partial any two argument function.

var partialItUp = function(fnToPartialOn, firstArg){
	return function(secondArg){
		return fnToPartialOn(firstArg, secondArg);
	};
};

addFive = partialItUp(add,5);
console.log(addFive(10));

//Or we can use lodash to accomplish the same thing with any function that takes any number of arguments
addFive = _.partial(add,5);
console.log(addFive(10));