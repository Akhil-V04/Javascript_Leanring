let btn1 = document.querySelector('#btn1');
btn1.onclick=(evt) =>{
    console.log('button was clicked');
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}

let btn2=document.querySelector('#btn2');
btn2.ondblclick=(evt) => {
    console.log('button was clicked 2 times');
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);

}

let box=document.querySelector('#box');
box.onmouseover=(evt) => {
    console.log('you are inside the box');
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}

//We mostly use only type and target properties of event object
//clientX and clientY are used for position of elements, espicially in games
//THESE ARE THE EVENT HANDLERS

//Event Listeners

btn1.addEventListener('click', () => {
    console.log('button was clicked using event listener');
});

const button = ()=>{
    console.log('button was clicked using event listener');
}
btn1.addEventListener('click', button);

btn1.removeEventListener('click', button); //removes the event listener