/* Datatypes in JavaScript : 7
undefined, null, boolean, number, string, symbol, object */

//Declaring a variable of 3 ways

var name = "Akhil"; //1. used throughout the program

name= "Akhil Kumar"; //1. reassigning the value of name

let city = "Hyderabad"; //2. used within the block

const pi = 3.14; //3. constant value, cannot be changed

var a; //declaring a variable a without assigning value, it will be undefined
var b =4; //assigning value to variable b
console.log(a); //undefined
a=7;
b=a;
console.log(a); //7

//variables and functions are casesensitive in JavaScript
var myName = "Akhil";
var MyName = "Kumar";
console.log(myName); //Akhil
console.log(MyName); //Kumar    