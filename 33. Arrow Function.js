//arrow function is used to write a function in a shorter way. It is also called fat arrow function. It does not have its own this, arguments, super, or new.target. It is best suited for non-method functions, and they cannot be used as constructors.
//syntax: (param1, param2, …, paramN) => { statements }
//if there is only one parameter, you can omit the parentheses
//if there is only one statement, you can omit the curly braces and the return keyword

//normal function
var magic =function(){ //Annonymous function
    return new Date();
};

//Arrow function
const magicArrow =()=> new Date(); //Arrow function with no parameters

//Arrow function with one parameter
const myConcat=(arr1,arr2)=> arr1.concat(arr2); //Arrow function with two parameters

//Syntax: 
var myconcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myconcat([1, 2], [3, 4, 5])); // [1, 2, 3, 4, 5]

//Example1
const hello=(name,age)=> {console.log(`Hello my name is ${name}`);
                          console.log(`I am ${age} years old.`);
}

//settimout function
//exam2
setTimeout(helloFunc, 3000)
function helloFunc(){
    console.log("Hello world");
}

//example3
setTimeout(function(){
    console.log("hello world");
},3000);

//example 4 using arrow function
setTimeout(()=>console.log("Hello World"),3000);
