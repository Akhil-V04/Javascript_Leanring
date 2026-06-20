//you cannot declare a variable more than once using let, but you can with var
let x = 10;
//let x = 20; // SyntaxError: Identifier 'x' has already been declared

var y = 10;
var y = 20; // No error, y is now 20

//"use strict" mode will throw an error if you try to redeclare a variable with var
"use strict";
var z = 10;
//var z = 20; // SyntaxError: Identifier 'z' has already been declared


function checkScope() {
    "use strict";
    let i="function scope";
    if(true){
        let i="block scope";
        console.log("Block scope i is: ", i); // Block scope i is: block scope, because let is inside a block and its local
    }
    console.log("Function scope i is: ", i); // Function scope i is: function scope, because let was inside and now outside let variable is shown
    return i;
}
checkScope();