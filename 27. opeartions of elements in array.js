//Add all elements in an array
var ourArr=[1,4,9,11];
var total=0;
for(var i=0;i<ourArr.length;i++){
    total +=ourArr[i];
}
console.log(total);
//output: 25

//multiplying all elements in an array
var ourArr=[1,4,9,11];
var product=1;
for(var i=0;i<ourArr.length;i++){
    product *=ourArr[i];
}
console.log(product);
//output: 396

//nested for loop
function multiplyAll(arr){
    var product=1;
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
            product *=arr[i][j];

        }
    }
    return product;
}
var product=multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);
//output: 5040