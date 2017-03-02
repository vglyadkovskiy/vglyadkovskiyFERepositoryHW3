var rad11 = document.getElementById("rad11");
var rad23 = document.getElementById("rad23");
var rad34 = document.getElementById("rad34");
var bres = document.getElementById("buttonResult");
var chb11 = document.getElementById("chb11");
var chb12 = document.getElementById("chb12");
var chb13 = document.getElementById("chb13");
var chb14 = document.getElementById("chb14");
var chb21 = document.getElementById("chb21");
var chb22 = document.getElementById("chb22");
var chb23 = document.getElementById("chb23");
var chb24 = document.getElementById("chb24");

function chekRadio(){
   var radRes = 0;
   if (rad11.checked == true){
      radRes += 1;
   }
   if (rad23.checked == true){
      radRes += 1;
   }
   if (rad34.checked == true){
      radRes += 1;
   }
   return radRes;
}

function chekChekBox(){
   var chbRes = 0;
   if ((chb12.checked == true)&&(chb11.checked == false)&&(chb13.checked == false)&&(chb14.checked == false)){
      chbRes += 0.5;
   }
   if ((chb13.checked == true)&&(chb11.checked == false)&&(chb12.checked == false)&&(chb14.checked == false)){
      chbRes += 0.5;
   }
   if ((chb12.checked == true)&&(chb13.checked == true)&&(chb11.checked == false)&&(chb14.checked == false)){
      chbRes += 1;
   }
   if ((chb21.checked == true)&&(chb22.checked == false)&&(chb23.checked == false)&&(chb24.checked == false)){
      chbRes += 0.5;
   }
   if ((chb22.checked == true)&&(chb21.checked == false)&&(chb23.checked == false)&&(chb24.checked == false)){
      chbRes += 0.5;
   }
   if ((chb21.checked == true)&&(chb22.checked == true)&&(chb23.checked == false)&&(chb24.checked == false)){
      chbRes += 1;
   }
   return chbRes;
}

function clickResultButton(){
   
            bres.onclick = function(){
               
               alert("Your RESULT: You score: " + (Number(chekRadio()) + Number(chekChekBox())) + " points. " + "You have " + (Number(chekRadio()) + Number(chekChekBox()))/5*100 + " % correct answers.");
            }
}

clickResultButton();