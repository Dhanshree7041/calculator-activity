let input1 = document.getElementsByClassName('input-Box2')[0]
let input2 = document.getElementsByClassName('input-Box1')[0]
let equation;

function getval(num){
    if(input1.value=='0'){
        input1.value=num;
    }
    else{
        input1.value+=num;
    }
 }

 function getans()
 {
    let ans=eval(input1.value);
    equation=input1.value;
    input1.value=ans;
    input2.value= equation +'='
 }
 function clr()
 {
    input1.value = "0" 
    input2.value = "" 

    //input = document.getElementsByClassName('input-Box').
 }
 