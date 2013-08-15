//alert("JavaScript works!");

// Aaron Korpa
// SDI 1308
// Project 2
// Theme: My cat's life

//flow chart - start

//flow chart - internal storage (Variables: String, Number, Array)

// variables
var catFood = "Purina One dry cat food";
var catMotivation = 2;
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
var eat = function (piecesOfFood) {
	var bite = 3;
		while (piecesOfFood > 0) {
		console.log("My cat notices that there are " + piecesOfFood + 
		" bits of food in her food bowl, so she takes a bite. She can consume " + bite + " food bits each bite.");
		piecesOfFood = piecesOfFood - bite;
		};
	return eat = 0
};

// flow chart - predefined process (String Function)
var dietPlan = function (canned, treat) {
	var otherFood = "I have tried other food types such as ";
	var gainWeight= " but they only make her gain weight faster and eat more.";
	dietPlan = otherFood + canned +" and " + treat + gainWeight;
	return dietPlan
};

// flow chart - predefined process (Array Function)
var exercise = function (energyLevel, thingsToDo) {
	var activities = thingsToDo.length;
	for (var i = energyLevel; i < activities; i = i + 1) {
		console.log("My cat has some motivation so she is going to begin" + thingsToDo[i] + ".");
	};
	return lowEnergyActivities = [" eating", " sleeping"];
};

// outputs
console.log("My cat is fat because she eats a lot of " + catFood + " and is lazy.");

console.log("Her day to day activities include" + catActivities + ".");

feedCat(3);

gotTired(1, 0);

eat(15);

dietPlan("Friskies", "Pounce cat treats");

exercise(catMotivation, catActivities);

// flow chart - internal storage (Returned Values)
// these returned values must be output to be visible, but all returned values are available at this point.

// flow chart - final output (using returned values to display them in console)
console.log("My cat has " + eat + " pieces of dry food left.");

console.log(dietPlan);

console.log("Since my cat used all of her motivation she resumes her mellow activities such as" + lowEnergyActivities + ".");

// flow chart - finish
