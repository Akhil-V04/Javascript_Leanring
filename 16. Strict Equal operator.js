/* 3==3 means it checks the data type and value
3==="3" means it checks the data type and value, so it will return false because 3 is a number and "3" is a string. */
function testStrict(val){
    if(val===7){
        return"Equal";    }
        else
            return "not equal";

    }
    console.log(testStrict('7')); //not equal
    console.log(testStrict(7)); //Equal


    //Strict inequal operator
    function testStrictNotEqual(val){
        if(val!==7){
            return"Not Equal";    } 
            else
                return "Equal"; 
    }
    console.log(testStrictNotEqual(7)); //Equal
    console.log(testStrictNotEqual('7')); //Not Equal