//Fetch= Function used for HTTP requests to fetch resources
//(JSON files,images,files)
//used for interacting with APIs and retrieving data from servers
//data asynchronous over web
//fetch(url, {options})
//options= get.post,put,delete


fetchData();
async function fetchData(){
    try{
        const pokemonName= document.querySelector('#pokemonName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            console.error("Could not fetch data");
        }
        const data =await response.json();
        const PokemonSprite = data.sprites.front_default;
        const imgElement = document.querySelector('#PokemonSprite');
        imgElement.src= PokemonSprite;
        imgElement.style.display= "block";
    }
    catch(error){
        console.error(error);
    }
}