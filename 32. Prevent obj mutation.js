function freezeObj(){
    "use strict";
    const MathConstants={
        PI:3.14
    };
    Object.freeze(MathConstants); //this will prevent the object from being mutated
try{
    MathConstants.PI =99 //this will not work because the object is frozen
}
catch(ex){
    console.log(ex);}
    return MathConstants.PI;
}
const PI = freezeObj();// PI will be 3.14 because the object is frozen and cannot be mutated