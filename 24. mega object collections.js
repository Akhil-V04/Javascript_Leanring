var collection ={
    "2568":{
        "album": "Renaissance",
        "artist": "Beyoncé",
        "tracks" : [
            "Let it Rock",
            "Break My Soul"
        ]
    },
    "2569":{
        "album": "Shape of You",
        "artist": "Ed Sheeran",
        "tracks" : [
            "1999",
            "Photograph"
        ]
    },
    "2570":{
        "album": "Blinding Lights",
        "artist": "The Weeknd",
        "tracks" : [
            "Blinding Lights",
            "Save Your Tears"
        ]
    },
    "2571":{
        "album": "Levitating",
        "artist": "Dua Lipa",
        "tracks" : []
    }
};
var collectioncopy =JSON.parse(JSON.stringify(collection));
function updateRecord(id, prop, value){
    if (value===""){
        delete collection[id][prop];
    }
    else if(prop==="tracks"){
        collection[id][prop]=collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else{
        collection[id][prop]=value;
    }
    return collection;
}
console.log(updateRecord(2568, "tracks", "Cuff It"));
console.log(updateRecord(2569, "artist", "Ed Sheeran"));