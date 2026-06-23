//when u assign a value to a variable using const keyword, it cannot be reassigned. It is block scoped and cannot be redeclared. It is used to declare variables that are not going to change their value.
const a = 10;
//a = 20; // TypeError: Assignment to constant variable.

const b =[1,2,3];
//b = [4,5,6]; // TypeError: Assignment to constant variable.
b[0]=4;
b[1]=5;
b[2]=6;
console.log(b); // [4,5,6] - we can change the values of the array but cannot reassign the array itself.