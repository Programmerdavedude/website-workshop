function Transribe(){
	var dnaValue = document.getElementsByClassName("form-control")[0].value;
	var dnaLegth = dnaValue.length;
	var dnaArray;
	var codexLegth;
	var aminoacid;

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

		if(dnaArray[i] != "a" && dnaArray[i] != "c" && dnaArray[i] != "t" && dnaArray[i] != "g"){
			console.log("illegal character: " + dnaArray[i]);
			alert("Please eneter a valid DNA sequence");
			break;
		
		}

		else{
			
			console.log("right");

			if(dnaArray[i] == "g"){
				dnaArray.splice(i, 1, "c");
			}
			
			else if(dnaArray[i] == "t"){
				dnaArray.splice(i, 1, "a");
			}

			else if(dnaArray[i] == "a"){
				dnaArray.splice(i, 1, "u");
			}

			else if(dnaArray[i] == "c"){
				dnaArray.splice(i, 1, "g");
			}
			
			console.log(dnaArray);
		}
	}
	codexLegth = dnaLegth / 3;
	for (i = 0; i < codexLegth; i++){
		var codexOne = dnaArray[i];
		console.log(i);
		var codexTwo = dnaArray[i+1];
		console.log(i);
		var codexThree = dnaArray[i+2];
		var codex = codexOne + codexTwo + codexThree;
		console.log(codex);
		console.log(aminoacid);
		if (codex == "uuu" || "uuc"){
			alert('test');
			if(true){
				 aminoacid = "Phe, ";
			}
			// else aminoacid = aminoacid + "Phe, ";
			console.log(aminoacid);
		}
		else if (codex == 'uua' || "uug" || 'cuu' || 'cuc' || 'cua' || 'cug'){
			if(true){
				 aminoacid = "Leu, ";
			}
			// else aminoacid = aminoacid + "Leu, ";
			console.log(aminoacid);
		}
		else if (codex == 'ucu' || "ucc" || "uca" || "ucg"){
			if(true){
				 aminoacid = "Ser, ";
			}
			// else aminoacid = aminoacid + "Ser, ";
			console.log(aminoacid);
		}
		else if (codex == 'uau' || "uac"){
			if(true){
				 aminoacid = "Tyr, ";
			}
			// else aminoacid = aminoacid + "Tyr, ";
			console.log(aminoacid);
		}
		else if (codex == 'ugu' || "ugc"){
			if(true){
				 aminoacid = "Cys, ";
			}
			// else aminoacid = aminoacid + "Cys, ";
			console.log(aminoacid);
		}
		else if (codex == 'ccu' || "ccc" || "cca" || "ccg"){
			if(true){
				 aminoacid = "Pro, ";
			}
			// else aminoacid = aminoacid + "Pro, ";
			console.log(aminoacid);
		}
		else if (codex == 'cau' || "cac"){
			if(true){
				 aminoacid = "His, ";
			}
			// else aminoacid = aminoacid + "His, ";
			console.log(aminoacid);
		}
		else if (codex == 'caa' || "cag"){
			if(true){
				 aminoacid = "Gln, ";
			}
			// else aminoacid = aminoacid + "gln, ";
			console.log(aminoacid);
		}
		else if (codex == 'cgu' || "cgc" || 'cga' || 'cgg' || "aga" || "agg"){
			if(true){
				 aminoacid = "Arg, ";
			}
			// else aminoacid = aminoacid + "Arg, ";
			console.log(aminoacid);
		}
		else if (codex == 'auu' || "auc" || "aua"){
			if(true){
				 aminoacid = "Ile, ";
			}
			// else aminoacid = aminoacid + "Ile, ";
			console.log(aminoacid);
		}
		else if (codex == 'aug'){
			if(true){
				 aminoacid = "Met, ";
			}
			// else aminoacid = aminoacid + "Met, ";
			console.log(aminoacid);
		}
		else if (codex == 'acu' || "acc" || "aca" || "acg"){
			if(true){
				 aminoacid = "Thr, ";
			}
			// else aminoacid = aminoacid + "Thr, ";
			console.log(aminoacid);
		}
		else if (codex == 'aau' || "aac"){
			if(true){
				 aminoacid = "Asn, ";
			}
			// else aminoacid = aminoacid + "Asn, ";
			console.log(aminoacid);
		}
		else if (codex == 'aaa' || "aag"){
			if(true){
				 aminoacid = "Lys, ";
			}
			// else aminoacid = aminoacid + "Lys, ";
			console.log(aminoacid);
		}
		else if (codex == 'agu' || "agc"){
			if(true){
				 aminoacid = "Ser, ";
			}
			// else aminoacid = aminoacid + "Ser, ";
			console.log(aminoacid);
		}
		else if (codex == 'guu' || "guc" || "gua" || "gug"){
			if(true){
				 aminoacid = "Val, ";
			}
			// else aminoacid = aminoacid + "Val, ";
			console.log(aminoacid);
		}
		else if (codex == 'gcu' || "gcc" || "gca" || "gcg"){
			if(true){
				 aminoacid = "Ala, ";
			}
			// else aminoacid = aminoacid + "Ala, ";
			console.log(aminoacid);
		}
		else if (codex == 'gau' || "gac"){
			if(true){
				 aminoacid = "Asp, ";
			}
			// else aminoacid = aminoacid + "Asp, ";
			console.log(aminoacid);
		}
		else if (codex == 'gaa' || "gag"){
			if(true){
				 aminoacid = "Glu, ";
			}
			// else aminoacid = aminoacid + "Phe, ";
			console.log(aminoacid);
		}
		else if (codex == 'ggu' || "ggc" || "gga" || "ggg"){
			if(true){
				 aminoacid = "Gly, ";
			}
			// else aminoacid = aminoacid + "gly, ";
			console.log(aminoacid);
		}

	}
}