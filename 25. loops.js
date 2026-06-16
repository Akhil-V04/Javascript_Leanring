//While Loop

var myArr=[];
var i=0;
while(i<5){
    myArr.push(i);
    i++;
}
console.log(myArr);

//For Loop

var ourArr=[];
for (var i=0;i<5;i++){
    ourArr.push(i);
}
console.log(ourArr);

//Iterating through an Array with a For Loop
var arr=[10,9,8,7,6];
var total=0;    
for (var i=0;i<arr.length;i++){
    total+=arr[i];
}
console.log(total);

//do...while Loop
var myArray=[];
var i=10;
do{
    myArray.push(i);
    i++;
}while(i<5);
console.log(myArray);
//output: [10] because the condition is checked after the code block is executed at least once.