var teacher = "Abhik";

function fun(){
    var teacher = "Abhik Patra";
    content = "JS";
    console.log(teacher);
}

function gun(){
    var student = "David";
    console.log(student);
}

fun();
gun();
console.log(teacher);
console.log(content);
// PARSING AND EXCUTUTION PHASE
//-----------------------> The Content Magic --------------->

/*
if we run the content at first fun it no varibale so its throw a reference error
then we start it after fun "Content" is not initialized as a variable it goes beyond one variable the out varibale to find this not get it will act as a auto variable so its call AUTO VARIABLES SCOPE

AUTO GLOBAL create itself in EXCUTION PHASE NOT IN PARSING PHASE    

// The story
/* 
The function run step by Step
1) Teacher allocated his value and variable name
2) Then function code fun ask do you have golbal varibale fun , answer is no then fun is now global scope, read but allocated the variable value teacher
then skip it gun function and allocated coresponding variable not value 
then i call fun function excute the variable and values and run then run another variable
That's it 
*/

