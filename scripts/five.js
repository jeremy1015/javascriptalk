//Arrays
var mylist = [1,2,3];
console.log(mylist[0]);

mylist = [1,"two", { foo: "bar"},  function(){ return 1 + 2;}];

console.log(mylist[3]);

console.log( mylist[3]() );

console.log( (mylist[3]).call() );

//JSON

var myObject = {
	x: 1,
	y: 2,
	add: function(){
		return this.x + this.y;
	},
	children : [
		{
			name: "Sally"
		},
		{
			name: "Bob",
			male : true
		}
	]
};