$(document).ready(function(){
    //gen values for the boxes
    var twrTwo = "50%";
    var Horse = "50%"
    var b1 = Math.floor(Math.random() * 1000) + 1;
    var b2 = Math.floor(Math.random() * 1000) + 1;
    var b3 = Math.floor(Math.random() * 1000) + 1;
    var b4 = Math.floor(Math.random() * 1000) + 1;
    var b5 = Math.floor(Math.random() * 1000) + 1;
    var b6 = Math.floor(Math.random() * 1000) + 1;
    var b7 = Math.floor(Math.random() * 1000) + 1;
    document.getElementById("BoxOne").innerHTML = b1;
    document.getElementById("BoxTwo").innerHTML = b2;
    document.getElementById("BoxThree").innerHTML = b3;
    document.getElementById("BoxFour").innerHTML = b4;
    document.getElementById("BoxFive").innerHTML = b5;
    document.getElementById("BoxSix").innerHTML = b6;
    document.getElementById("BoxSeven").innerHTML = b7;
    $("#BoxOne").click(function() {
        $("#BoxOne").animate({
            marginLeft: Horse
        }, 500);
    });
});
