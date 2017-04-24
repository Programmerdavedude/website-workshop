function Transribe(){
	var dnaLegth = document.getElementsByClassName("form-control")[0].value.length;
	if(dnaLegth % 3 != 0){
		alert("please enter a multiple of 3 to achive proper translation");
		return;
	}
	alert("good job");
}