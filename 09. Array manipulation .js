//push
var Ourarray= ["John", 23, ["cat", "dogg"]];
Ourarray.push(["happy", "joy"]); //Ourarray now equals ["John", 23, ["cat", "dogg"], ["happy", "joy"]]

//Pop

var ourArray = ["Stimpson", "J", "cat"];
var removedFromOurArray = ourArray.pop(); //removedFromOurArray now equals "cat" and ourArray now equals ["Stimpson", "J"]

//pop always removes the last element of a array

//shift
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift(); //removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]]

//unshift
var ourArray = ["Stimpson", "J", "cat"];
ourArray.unshift("Happy"); //ourArray now equals ["Happy", "Stimpson", "J", "cat"]
//similar to push but adds elements to the beginning of an array instead of the end.
