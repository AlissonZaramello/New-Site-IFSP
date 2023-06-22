// Header

window.addEventListener('scroll', ()=>
{
    let downheader = document.querySelector('.downHeader');
    let scrollPosition = window.scrollY;
    
    if(scrollPosition > 20)
    {  downheader.classList.add('hidden');}
    if(scrollPosition <= 20) 
        {downheader.classList.remove('hidden');}
})
