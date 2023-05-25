let buttonArea = document.querySelector('.buttonarea');
let button = document.querySelector(".buttonarea button")
let yes = document.querySelector(".yesbutton")
buttonArea.addEventListener('mouseover', ()=>  {
    buttonArea.style.left = ` ${Math.random()*1200}px`
    buttonArea.style.top = ` ${Math.random()*500}px`  
    console.log('oi');
});

button.addEventListener('click', ()=> 
{ alert(' ;-;')})
yes.addEventListener('click', ()=> 
{ alert(' VOCÊ É FODA')})