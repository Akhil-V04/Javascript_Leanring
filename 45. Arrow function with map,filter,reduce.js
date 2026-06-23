const  numbers=[1,2,3,4,5,6];

const squares =numbers.map((elements)=>Math.pow(elements,2));
const cubes=numbers.map((elements)=>Math.pow(elements,3));
const even=numbers.filter((elements)=>elements%2===0);
const odd=numbers.filter((elements)=>elements%2 !==0);
const sum=numbers.reduce((accumulator,currentvalue)=>accumulator+currentvalue);

console.log(squares);
console.log(cubes);
console.log(even);
console.log(odd);
console.log(sum);