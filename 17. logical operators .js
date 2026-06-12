//And operator
function testLogic(val){
    if(val<50 && val>30){
        return "Yes";
    }
    return "No";
}
console.log(testLogic(40)); //Yes
console.log(testLogic(20)); //No


//Or operator
function testLogicOr(val){
    if(val<10 || val>20){
        return "Yes";
    }   return "No";
}
console.log(testLogicOr(5)); //Yes
console.log(testLogicOr(15)); //No