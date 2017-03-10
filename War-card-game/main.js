function cardSuit(plr, id){
    if(plr < 11 && plr > 1){
        document.getElementById(id).innerHTML = plr;
    }
    if(plr == 1){
        document.getElementById(id).innerHTML = "Ace";
    }
    if(plr == 11){
        document.getElementById(id).innerHTML = "Jack";
    }
    if(plr == 12){
        document.getElementById(id).innerHTML = "Queen";
    }
    if(plr == 13){
        document.getElementById(id).innerHTML = "King";
    }
}
$(document).ready(function(){
    var pcard;
    var cpucard;
    // cpucard = 12;
    // pcard = ;
    cpucard = Math.floor(Math.random() * 13) + 1;
    cardSuit(cpucard, "cpuCard");
    pcard = Math.floor(Math.random() * 13) + 1;
    cardSuit(pcard, "playerCard");
    function win(){
        if(cpucard == pcard){
            document.getElementById("ayer").innerHTML = "Draw!";
        }
        if(pcard == 1){
            document.getElementById("ayer").innerHTML = "Player Wins!";
            return;
        }
        if(cpucard == 1){
            document.getElementById("ayer").innerHTML = "Computer Wins!";
            return;
        }
        if(pcard > cpucard){
            document.getElementById("ayer").innerHTML = "Player Wins!";
        }
        if(cpucard > pcard){
            document.getElementById("ayer").innerHTML = "Computer Wins!";
        }
    }
    win();
});
