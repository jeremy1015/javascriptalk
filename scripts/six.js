//Let's get functional
var _ = require("lodash");

//Lodash method one - this looks like what LISPers are used to.
var result = _.reduce( 
	_.map(
		[1,2,3], 
		function(num){
			return num + 1;
		}
	), 
	function(num, memo){ 
		return memo + num;
	}
);

console.log(result);

//Lodash method two - this looks like what Algol/C#/Java folks are used to.
result = _([1,2,3])
 .map(function(num){
	return num+1;
 })
 .reduce(function(num, memo){
 	return memo + num;
 });

console.log(result);

//Let's look at a big old data manipulation chain in both methods.

