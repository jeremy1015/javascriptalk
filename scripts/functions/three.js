// YOU DO NOT NEED INTERFACES IN JAVASCRIPT;


var makeSpeak = function(animal){
	animal.speak();
};

var duck = {
	speak: function(){
		console.log("Quack");
	}
};

var cat = {
	speak: function(){
		console.log("Meow");
	}
};

makeSpeak(duck);
makeSpeak(cat);