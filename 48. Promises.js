//promises are an object and an object which manage asynchronous operations. 
//asynchronous means querying a file fetching adatabase and fethcing a file
// we use promises mainly to not go into callback hell.
//Example
function WalktheDog(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            const DogWalked=true;
            if(DogWalked){
            resolve("You have walked the Dog");
            }
            else{
                reject("You have not walked the Dog");
            }
        }, 2500);
    })
}
function CleantheKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const KitchenCleaned=false;
            if(KitchenCleaned){
                resolve("You have cleaned the Kithchen");    
            }
            else{
                reject("You have not cleaned the Kithchen");
            }
        },2000);
    })
}
function CleanTheTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const TrashCleaned=true;
            if(TrashCleaned){
                resolve("You have cleaned the Trash");
            }
            else{
                reject("You have not Cleaned the trash");   
            }
        }, 1500);
    })
}

WalktheDog().then(value=>{console.log(value);return CleantheKitchen()})
            .then(value=>{console.log(value);return CleanTheTrash()})
            .then(value=>{console.log(value);console.log("You have finished all the chores")})
            .catch(error=>{console.log(error)})

//if one promise fails then the NEXT REST of the promises will not be executed and the catch block will be executed.