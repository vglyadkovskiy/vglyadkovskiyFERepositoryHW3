var b0 = document.getElementById("button0");
var b1 = document.getElementById("button1");
var b2 = document.getElementById("button2");
var b3 = document.getElementById("button3");
var b4 = document.getElementById("button4");
var b5 = document.getElementById("button5");
var b6 = document.getElementById("button6");
var b7 = document.getElementById("button7");
var b8 = document.getElementById("button8");
var b9 = document.getElementById("button9");
var bDel = document.getElementById("buttonDel");
var bC = document.getElementById("buttonC");
var bDot = document.getElementById("buttonDot");
var bMult = document.getElementById("buttonMultiplication");
var bDiv = document.getElementById("buttonDivision");
var bAdd = document.getElementById("buttonAddition");
var bSub = document.getElementById("buttonSubtraction");
var bEq = document.getElementById("buttonEquals");
var screen = document.getElementById("screen");
var sign = document.getElementById("buttonSign");
var dot = document.getElementById("buttonDot");

var tmp = 0;
var operation = null;
var t = null;

function clickNumberButton(numberButton){
   
            numberButton.onclick = function(){
               if (t == null){
                  
                  if (screen.value.indexOf(".") != -1) {screen.value = screen.value + this.innerHTML}
                  else {screen.value = Number(screen.value + this.innerHTML)};
                  }
               else {
                  
                  
                  screen.value = Number(this.innerHTML);
                  t = null;
                  }
            }            
}
 
function clickCancelButton(){
   
            bC.onclick = function() {
               screen.value = Number(0);
               tmp = 0;
               operation = null;
               t = null;
               }
}

function clickButtonSign(){
   
            sign.onclick = function() {
               screen.value = Number(screen.value) * (-1);
               }
}

function clickButtonDot(){
   
            dot.onclick = function() {
                             
                  if (t == null){
                     if (screen.value.indexOf(".") == -1){
                        screen.value = screen.value + this.innerHTML;}}
                  else {
                     screen.value = 0 + this.innerHTML;
                     t = null;
                  }               
               }
}

function clickOperation(operationButton){
   
            operationButton.onclick = function(){
                  if (operation == null){
                     tmp = Number(screen.value);
                     operation = operationButton.value;   
                     t = operation;
                  }
                  else {
                     switch (operation){
                        case "*":
                           screen.value = tmp * Number(screen.value); 
                           break;
                        case "/":
                           if (Number(screen.value) != 0){
                           screen.value = tmp / Number(screen.value);}
                           else {
                           screen.value = "Error, you can't divide by zero )";}
                           break;
                        case "+":
                           screen.value = tmp + Number(screen.value);
                           break;
                        case "-":
                           screen.value = tmp - Number(screen.value);                       
                           break;  
                     }
                     operation = operationButton.value;
                     tmp = Number(screen.value);
                     t = operation;   
                  } 
            }               
}

function clickEqualsButton(){
   
            bEq.onclick = function(){
               if (operation != null){
                  switch (operation){
                     case "*":
                        screen.value = tmp * Number(screen.value);
                        break;
                     case "/":
                        if (Number(screen.value) != 0){
                        screen.value = tmp / Number(screen.value);}
                        else {
                        screen.value = "Error, you can't divide by zero )";}
                        break;
                     case "+":
                        screen.value = tmp + Number(screen.value);
                        break;
                     case "-":
                        screen.value = tmp - Number(screen.value);
                        break;                    
                  }
                  t = operation;
               }
            }
}
  
clickNumberButton(b0);
clickNumberButton(b1);
clickNumberButton(b2);
clickNumberButton(b3);
clickNumberButton(b4);
clickNumberButton(b5);
clickNumberButton(b6);
clickNumberButton(b7);
clickNumberButton(b8);
clickNumberButton(b9); 
clickCancelButton(); 
clickOperation(bMult);
clickOperation(bDiv);
clickOperation(bAdd);
clickOperation(bSub);
clickEqualsButton();
clickButtonSign();
clickButtonDot();
     
     
var rad11 = document.getElementById("rad11");
console.dir(rad11);   
   
  