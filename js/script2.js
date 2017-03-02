var rad11 = document.getElementById("rad11");
var rad23 = document.getElementById("rad23");
var rad33 = document.getElementById("rad33");
var bres = document.getElementById("buttonResult");
var chb12 = document.getElementById("chb12");
var chb13 = document.getElementById("chb13");
var chb21 = document.getElementById("chb21");
var chb22 = document.getElementById("chb22");

function chekRadio(){
   var radRes = 0;
   if (rad11.checked == true){
      radRes += 1;
   }
   if (rad23.checked == true){
      radRes += 1;
   }
   if (rad33.checked == true){
      radRes += 1;
   }
   return radRes;
}

function chekChekBox(){
   var chbRes = 0;
   if (chb12.checked == true){
      chbRes += 0.5;
   }
   if (chb13.checked == true){
      chbRes += 0.5;
   }
   if (chb21.checked == true){
      chbRes += 0.5;
   }
   if (chb22.checked == true){
      chbRes += 0.5;
   }
   return chbRes;
}

function clickResultButton(){
   
            bres.onclick = function(){
               
               alert("Your RESULT: You score: " + (Number(chekRadio()) + Number(chekChekBox())) + " points. " + "You have " + (Number(chekRadio()) + Number(chekChekBox()))/5*100 + " % correct answers.");
            }
}
clickResultButton();