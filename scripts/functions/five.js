//Because functions are variables, we can return them from other method calls.
var makeFunction = function(){
	return function(){
		console.log("Hi");
	}
};

var foo = makeFunction();
console.log(foo);
foo();

//This technique is called partial application:
var createAdditionFunction = function(a){
	return function(b){
		return a + b;
	};
};

var addFive = createAdditionFunction(5);
var addTen = createAdditionFunction(10);

console.log(addFive(1));
console.log(addTen(1));

//This is a technique you will use a fair amount.