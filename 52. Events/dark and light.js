let modeBtn = document.querySelector('#mode');
let currmode="light";
let body=document.querySelector('body');
modeBtn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        body.classList.add("black");
        body.classList.remove("white");
    }
    else{
        currmode="light";
        body.classList.add("white");
        body.classList.remove("black");
    }
console.log(currmode);
});