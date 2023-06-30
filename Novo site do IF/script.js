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

//about the course
window.addEventListener('scroll', ()=>
{
    let aside = document.querySelector('.line');
    let scrollPosition = window.scrollY;
    console.log(window.scrollY)

    if(scrollPosition > 890)
    {   aside.classList.add('fixed') }
    if(scrollPosition <= 890 || scrollPosition > 1900) 
    { aside.classList.remove('fixed')
       }
})
//Move to subject
