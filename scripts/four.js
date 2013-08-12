//Let's talk prototypical inheritance...

var Animal = function(name){
	this.name = name;
};

Animal.prototype.callByName = function(){
	console.log(this.name);
};

var dog = new Animal("Spot");
dog.callByName();

//There's this hidden prototype property
console.log(dog.__proto__);


//Now here's a separate way to do it - the ECMAScript 5 way.
var a = { count : 1};

var b = Object.create(a);

//They are not the same
console.log(a === b);

//Let's change a property in a
a.count = 5;
console.log(a.count);
console.log(b.count);

//Let's change a property in a that wasn't part of it when b was created.
a.color = "red";
console.log(a.color);
console.log(b.color);

console.log(b.__proto__);

//So what's the implications?
//Use your prototypes for FUNCTIONS and CONSTANT values. Don't change them around unless you're adding new functions to them.
//Here's the good news... you won't have to do prototypical inheritance much at all.