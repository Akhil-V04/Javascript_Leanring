var obj = {
    gift: "pony",
    pet: "horse",
    bed: "sloppy"
};
 function checkObj(checkProp){
    if(obj.hasOwnProperty(checkProp)){
        return obj[checkProp]
    } else {
        return "Property not found"
    }
 }
 console.log(checkObj("gift")); // Output: "pony"