//Because functions are variables, we can pass them around like variables.

var doSomethingToThis = function(fnToCall){
	return fnToCall(10);
};

var addTen = function(num){
	return num+10;
};

var multiplyByTen = function(num){
	return num * 10;
};

console.log (doSomethingToThis(addTen) );
console.log (doSomethingToThis(multiplyByTen) );

//Let's note about how this is helpful - things like map