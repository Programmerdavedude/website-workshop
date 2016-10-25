function playerplace(boxId){
    var playerturn = 1;
    var player1 = "X";
    var player2= "O";
    if(playerturn < 1){
        document.getElementById(boxId).innerHTML = player2;
        playerturn++;
    }
    if(playerturn == 1){
        document.getElementById(boxId).innerHTML = player1;
        playerturn++;
    }
}