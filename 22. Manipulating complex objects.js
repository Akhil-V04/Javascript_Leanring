//objects can contain different data types and arrays as well as other objects and objects can be nested within other objects.
var myStorage={
    car: "bmw",
    bike: "kawasaki",
    mygarage: [
        "lambhorgini",
        "ferrari",
        "ducati"
    ],
    outdoor: {
        "swimmingpool": true,
        "garden": false
    }
};
var result=[0] =myStorage.mygarage[1];
result=[1] =myStorage.outdoor.swimmingpool;
console.log(result[0]); //ferrari
console.log(result[1]); //true