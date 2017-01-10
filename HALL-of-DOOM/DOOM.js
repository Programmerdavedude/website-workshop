window.onload = function(){
   //weapon for player
   var weps = ["a","Master Sword","Deku Nut"];
   var pwep = weps[Math.ceil(Math.random() * 2)];
   var dwep = weps[Math.ceil(Math.random() * 2)];
   var pali = Math.ceil(Math.random() * 2)-1;
   var dali = Math.ceil(Math.random() * 2)-1;
   if(dali&&!pali){
      document.getElementById("innerdbox").innerHTML = "Doom equipped a "+dwep+" and found a buddy.";
      document.getElementById("innerpbox").innerHTML = "You equipped a " + pwep;
      document.getElementById("resultbox").innerHTML = "Doom Won";
   }
   if(pali&&!dali){
       document.getElementById("innerpbox").innerHTML = "You equipped a " + pwep+ " and found a buddy.";
       document.getElementById("innerdbox").innerHTML = "Doom equipped a "+dwep;
       document.getElementById("resultbox").innerHTML = "You Won";
   }
   if(!pali&&!dali){
      document.getElementById("innerdbox").innerHTML = "Doom equipped a "+dwep;
      document.getElementById("innerpbox").innerHTML = "You equipped a " + pwep;
      if(pwep==1){
         document.getElementById("resultbox").innerHTML = "You Won";
      }
      else{
         document.getElementById("resultbox").innerHTML = "Doom Won";
      }
   }
   if(pali&&dali){
      document.getElementById("innerdbox").innerHTML = "Doom equipped a "+dwep;
      document.getElementById("innerpbox").innerHTML = "You equipped a " + pwep;
      if(pwep==1){
         document.getElementById("resultbox").innerHTML = "You Won";
      }
      else{
         document.getElementById("resultbox").innerHTML = "Doom Won";
      }
   }
};