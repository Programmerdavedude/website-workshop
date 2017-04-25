function Transribe(){
	var dnaValue = document.getElementsByClassName("form-control")[0].value;
	var dnaLegth = dnaValue.length;
	var dnaArray;

	if(dnaLegth % 3 != 0){

		console.log("please enter a multiple of 3 to achive proper translation");

		return;

	}

	//remove spaces from string
	dnaValue = dnaValue.replace(/\s/g, '');

	//make string lower case
	dnaValue = dnaValue.toLowerCase();

	//convert string to array
	dnaArray = dnaValue.split('');

	console.log("fs");

	for (i = 0; i < dnaLegth; i++){

		console.log("d");

		if(dnaArray[i] != "a" || dnaArray[i] != "c"|| dnaArray[i] != "t" || dnaArray[i] != "g"){

			console.log("wrong");
		
		}
	}
}