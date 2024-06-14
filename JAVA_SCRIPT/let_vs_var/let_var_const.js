/*
VAR it is in function and Global scope 
if we console any variable before initialization its not throw error, because it is inside our function
but it is not possible in let

*/


function fun() {
    console.log(y); //undefined
    var y = 20;
    console.log(y);
}

function gun(x) {
    if (x % 2 == 0) {
        var i = 0;
    } else { var i = 1; }

    console.log(i);
}

fun();
gun(21);

// var allow us redecularation but let not allow
var x = 20;
var x= 40;
// let y=10;  error 
// let y= 21;
