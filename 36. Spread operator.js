//Spread operator is used to expand an array into individual elements. It can be used in function calls, array literals, and object literals.
//syntax: ...array
const arr1=['JAN','FEB','MAR','APR','MAY'];
let arr2;
(function(){
    arr2=[...arr1]; //spread operator is used to copy the elements of arr1 into arr2
    arr1[0]='potato'; //changing the value of arr1[0] will not affect arr2 because arr2 is a copy of arr1
})();
console.log(arr2); //['JAN','FEB','MAR','APR','MAY']