//Async/Await are both dependent on promises and eachother
//Await is only used inside a  async function 
//Async function always returns a promise
//main role is that Await waits till the promise is resolved or reject and return the value and next line of code is executed
//we use ASyncronous functions in synchrounous manner using Async and Await

//previous example
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

/*WalktheDog().then(value=>{console.log(value);return CleantheKitchen()})
            .then(value=>{console.log(value);return CleanTheTrash()})
            .then(value=>{console.log(value);console.log("You have finished all the chores")})
            .catch(error=>{console.log(error)})
All this can be done using Async and Await in a much cleaner way.
            */
async function doChores(){
    try{
        const DogWaledResult=await WalktheDog();
        console.log(DogWaledResult);
        const KitchenCleanedResult=await CleantheKitchen();
        console.log(KitchenCleanedResult);
        const TrashCleanedResult=await CleanTheTrash();
        console.log(TrashCleanedResult);
        console.log("You have finished all the chores");
         }catch(error){
            console.error(error);
         }
}
doChores();