//Global variables are variables that are declared outside of a function, and can be accessed from any function in the program.
//example of global variable
var globalVar = "I am a global variable";
function func1() {
    console.log(globalVar); //I am a global variable
    var localVar = "I am a local variable";
    console.log(localVar); //I am a local variable
    localVar1 = "I am global variable inside a function"; //without var keyword localVar1 becomes a global variable and can be accessed in func2
}   
function func2() {
    console.log(globalVar); //I am a global variable
    console.log(localVar); //Uncaught ReferenceError: localVar is not defined
    console.log(localVar1);//without var keyword localVar1 becomes a global variable and can be accessed in func2
}