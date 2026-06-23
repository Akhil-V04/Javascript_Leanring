//We use rest operator to collect all remaining elements into an array. It is denoted by three dots (...). It can be used in function parameters to collect all remaining arguments into an array, or in array destructuring to collect all remaining elements into an array.

//initial example without rest operator
const sum=(function(){
    return function sum(x,y,z){
        const args=[x,y,z];
        return args.reduce((a,b)=> a+b,0);
    }
})();
console.log(sum(1,2,3)); //6

//using rest operator
const sums=(function(){
    return function sums(...args){
        return args.reduce((a,b)=> a+b,0);
    }
})();
console.log(sums(1,2,3));//6