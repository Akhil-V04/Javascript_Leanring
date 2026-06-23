const increment= (function(){
    return function increment(num, value =1){
        return num+value;
    }
})();
console.log(increment(5,2)); //7
console.log(increment(5)); //6

function greet(name = "Guest") {
  console.log("Hello " + name);
}
greet(); // Hello Guest
greet("Akhil"); // Hello Akhil