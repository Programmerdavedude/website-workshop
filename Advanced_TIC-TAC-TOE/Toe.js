var playerturn = 2;
var player1score = 0;
var player2score = 0;
function WinCheck(){
    var UL = document.getElementById("upperLeft").innerHTML;
    var UM = document.getElementById("upperMid").innerHTML;
    var UR = document.getElementById("upperRight").innerHTML;
    var ML = document.getElementById("midLeft").innerHTML;
    var MM = document.getElementById("midMid").innerHTML;
    var MR = document.getElementById("midRight").innerHTML;
    var BL = document.getElementById("bottomLeft").innerHTML;
    var BM = document.getElementById("bottomMid").innerHTML;
    var BR = document.getElementById("bottomRight").innerHTML;
    //check if O wins
    if(UL == "O" && UM == "O" && UR == "O" || ML == "O" && MM == "O" && MR == "O" ||
    BL == "O" && BM == "O" && BR == "O" || UL == "O" && ML == "O" && BL == "O" ||
    UM == "O" && MM == "O" && BM == "O" || UR == "O" && MR == "O" && BR == "O" ||
    UL == "O" && MM == "O" && BR == "O" || UR == "O" && MM == "O" && BL == "O"){
        alert("O has Won");
        player2score++;
    }
    //check if X wins
    if(UL == "X" && UM == "X" && UR == "X" || ML == "X" && MM == "X" && MR == "X" ||
    BL == "X" && BM == "X" && BR == "X" || UL == "X" && ML == "X" && BL == "X" ||
    UM == "X" && MM == "X" && BM == "X" || UR == "X" && MR == "X" && BR == "X" ||
    UL == "X" && MM == "X" && BR == "X" || UR == "X" && MM == "X" && BL == "X"){
        alert("X has Won");
        player1score++;
    }
    
}
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