//Objects are similar to arrays but they dont have index, instead they have properties and values.
var myDog={
    "name": "Leo",
    "legs": 4,
    "tail": 1,
    "friends": ["male", "female"]
}
//You can access the properties of an object using dot notation or bracket notation.
console.log(myDog.name); //Leo
console.log(myDog["name"]); //Leo   
console.log(myDog.legs); //4
console.log(myDog["legs"]); //4

myDog.name="Max";
console.log(myDog.name); //Max

