var s = "X-X-X-X-X-X-X-X-X-X-X-X";

s = "5/-5/-5/-5/-5/-5/-5/-5/-5/-5/-5"

var frames = s.split("-");

var twoAgo = 0, oneAgo = 0;

var score = _.reduceRight(frames, function(memo, frame){
	var throws = frame.split("");
	var toAdd;
	if (throws[0] == "X"){
		toAdd = 10 + oneAgo + twoAgo;
		twoAgo = oneAgo;
		oneAgo = 10;
	}else {
		if (throws[1] == "/"){
			toAdd = 10 + oneAgo;
			twoAgo = 10 - parseInt(throws[0]);
			oneAgo = parseInt(throws[0]);
		} else{
			twoAgo = parseInt(throws[1]);
			oneAgo = parseInt(throws[0]);
			toAdd = twoAgo + oneAgo;
		}
	}
	return memo + toAdd;
}, 0);

console.log(score);