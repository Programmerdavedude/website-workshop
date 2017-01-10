window.onload = function(){
    var c = document.getElementById("gameCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(400,400,80,0,2*Math.PI);
    ctx.stroke();
}