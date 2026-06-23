//It means to unpack values from arrays or properties from objects into distinct variables. It is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
//syntax: const {property} = object; or const [variable] = array;

//object destructuring
var voxel ={x:3,y:7,z:9};
const {x:a, y:b, z:c} = voxel;
//a=3, b=7, c=9

//array destructuring
const [first, second] = [1,2,3,4,5,6];
//first=1, second=2

const AVG_TEMPERATURES ={
    today:77.5,
    tomorrow:79
};
function getTempofTmrw(avgTemperatures){
    "use strict";
    const{tomorrow:tempOfTomorrow}=avgTemperatures; //it says get the property 'tomorrow' from the object 'avgTemperatures' and assign it to a new variable called 'tempOfTomorrow'

    return tempOfTomorrow;
}
console.log(getTempofTmrw(AVG_TEMPERATURES)); //79


//nested object destructuring
const LOCAL_FORECAST ={
    today:{min:72, max:83},
    tomorrow:{min:73.3, max:84.6}
};
function getMaxofTmrw(forecast){
    "use Strict";
    const {tomorrow:{max:maxOfTomorrow}} =forecast; //it says get the property 'tomorrow' from the object 'forecast' and then get the property 'max' from the object 'tomorrow' and assign it to a new variable called 'maxOfTomorrow'

    return maxOfTomorrow;
}
console.log(getMaxofTmrw(LOCAL_FORECAST)); //84.6




//we can assign the values of an array to variables in a single statement using destructuring assignment
const [z,y,,x]=[1,2,3,4,5,6];
console.log(z,y,x); //1 2 4

//we can use destructuring assignment to swap the values of two variables without using a temporary variable
let g=6;h=8;
[g,h]=[h,g];
console.log(g,h); //8 6     

//we can use destructing assignment for rest operator to assign the rest of the array elements to a variable
const source=[1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    "use strict";
    const[,,...arr]=list; //it says skip the first two elements of the array and assign the rest of the elements to a new variable called 'arr'

    return arr;
}
const arr=removeFirstTwo(source);
console.log(arr); //[3,4,5,6,7,8,9,10]
console.log(source); //[1,2,3,4,5,6,7,8,9,10] - the original array is not changed because we are using destructuring assignment to create a new array with the rest of the elements.