var contacts=[
    {
        "firstName":"John",
        "lastName":"Doe",
        "likes" :["Pizza","Coding"] 
    },
    {
        "firstName":"Jane",
        "lastName":"Smith",
        "likes" :["Swimming","Reading"] 
    },
    {
        "firstName":"Emily",
        "lastName":"Johnson",
        "likes" :["Traveling","Photography"]
    }
];
function lookUpProfile(name,prop){
    for(var i=0;i<contacts.length;i++){
        if(contacts[i].firstName===name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}
var data =lookUpProfile("John","likes");
console.log(data);

//output: ["Pizza","Coding"]