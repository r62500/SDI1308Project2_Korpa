//alert("JavaScript works!");

// Aaron Korpa
// SDI 1308
// Project 2
// Theme: My cat's life

//flow chart - start

//flow chart - internal storage (Variables: String, Number, Array)

// variables(also declared the variables for the different functions here)
var catFood = "Purina One dry cat food";
var myVariable = 1;
var catActivities = [" eating", " sleeping", " scratching the scratching post", " using the litter box",  " staring at the wall"];

// flow chart - predefined process (Procedure)
var feedCat = function (amountOfFood) { 
	if (amountOfFood >= 2) {
		console.log("After eating, my cat goes to sleep.");
	} else {
		console.log("If my cat hasn't had enough food she will bug me until she gets enough food.");
	}
};

// flow chart - predefined process (Boolean Function)

var gotTired = function (timesUsedLitterbox, timesScratchedPost) { 
	if (timesUsedLitterbox + timesScratchedPost >= 1) {
		console.log("Once she has either used the litter box or scratched on the scratching post my cat goes to sleep again.");
		return gotTired = true;
	} else {
		console.log("If my cat hasn't become tired, she will just stare at the wall.");
		return gotTired = false;
	}
};

// flow chart - predefined process (Number Function)

// outputs
console.log("My cat is fat because it eats lots of " + catFood + " and is lazy.");
console.log("Her day to day activities include" + catActivities + ".");
feedCat(3);
gotTired(1, 0);



