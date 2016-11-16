var playerscore = 0;
var AIscore = 0;
function drawCheck(){
    for(i=0, j=0; i<9;i++){
        if(document.getElementsByClassName('box')[i].innerHTML != ""){
            j++;
            if(j == 9){
                Reset("n");
            }
        }
    }
}
function Reset(win){
    for(i=0;i<9;i++)
        document.getElementsByClassName('box')[i].innerHTML = "";
        if(win == "x" ){
            document.getElementById("innerx").innerHTML = playerscore;
        }
        if(win == "o"){
            document.getElementById("innero").innerHTML = AIscore;
        }
        if(win == "n"){
            alert("It Was a Draw");
        }
}
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
        alert("The computer has Won");
        AIscore++;
        Reset("o");
    }
    //check if X wins
    if(UL == "X" && UM == "X" && UR == "X" || ML == "X" && MM == "X" && MR == "X" ||
    BL == "X" && BM == "X" && BR == "X" || UL == "X" && ML == "X" && BL == "X" ||
    UM == "X" && MM == "X" && BM == "X" || UR == "X" && MR == "X" && BR == "X" ||
    UL == "X" && MM == "X" && BR == "X" || UR == "X" && MM == "X" && BL == "X"){
        alert("You have Won");
        playerscore++;
        Reset("x");
    }
    
}
function AIturn(){
    var AIbox = Math.floor(Math.random() * 9);
    alert(AIbox);
}
function playerplace(boxId){
    var player = "X";
    var AI = "O";
    if(document.getElementById(boxId).innerHTML == ""){
            document.getElementById(boxId).innerHTML = player;
        }
        WinCheck();
        drawCheck();
        AIturn();
}