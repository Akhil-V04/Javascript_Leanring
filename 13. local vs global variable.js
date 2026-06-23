//You can use same variable name for local and global variable, but they will be treated as different variables. The local variable will only be accessible within the function it is declared in, while the global variable will be accessible from anywhere in the program.
var varName = "I am a global variable";
function func1() {
    var varName="i am a local variable";
    return varName;
}
console.log(varName); //I am a global variable
console.log(func1()); //i am a local variable