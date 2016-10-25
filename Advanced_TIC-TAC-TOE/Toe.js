var playerturn = 2;
function playerplace(boxId){
    var player1 = "X";
    var player2= "O";
    if(document.getElementById(boxId).innerHTML == ""){
        if(playerturn <= 1){
            document.getElementById(boxId).innerHTML = player2;
            playerturn++;
        }
        if(playerturn == 2){
            document.getElementById(boxId).innerHTML = player1;
            playerturn = 0;
        }
    WinCheck();
        
    }
}
function WinCheck(){
    var UL = document.getElementById(upperLeft).innerHTML;
    var UM = document.getElementById(upperMid).innerHTML;
    var UR = document.getElementById(upperRight).innerHTML;
    var ML = document.getElementById(midLeft).innerHTML;
    var MM = document.getElementById(midMid).innerHTML;
    var MR = document.getElementById(midRight).innerHTML;
    var BL = document.getElementById(bottomLeft).innerHTML;
    var BM = document.getElementById(bottomMid).innerHTML;
    var BR = document.getElementById(bottomRight).innerHTML;
    //check if O wins
    if(UL == "O" && UM == "O" && UR == "O" || ML == "O" && MM == "O" && MR == "O" ||
    BL == "O" && BM == "O" && BR == "O" || UL == "O" && ML == "O" && BL == "O" ||
    UM == "O" && MM == "O" && BM == "O" || UR == "O" && MR == "O" && BR == "O" ||
    UL == "O" && MM == "O" && BR == "O" || UR == "O" && MM == "O" && BL == "O"){
        alert("O has Won");
    }
    
}