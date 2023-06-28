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

//header nav open
let navOptions = document.querySelectorAll('nav .navOption');


navOptions.forEach((navOptions) => {
    navOptions.addEventListener('mouseover', ()=> 
    { 
        navOptions.querySelector('.navList').style.display = 'flex';
    })
})

navOptions.forEach((navOptions) => {
    navOptions.addEventListener('mouseout', ()=> 
    {   if(navOptions.querySelector('.navList').style.display = 'flex')
        { navOptions.querySelector('.navList').style.display = 'none'  }
        
    })
})
