let nav=document.querySelector('.prelien')

window.addEventListener('scroll',()=>{
    if (document.documentElement.scrollTop>200) {
        nav.style.position='fixed'
        nav.style.top=0
        nav.style.width=100+'%'
        nav.style.backgroundColor='#ffffff'
        nav.style.zIndex='1000'
    }
    else{
        nav.style.position='relative'
        nav.style.top=0
     
        nav.style.PaddingRight=20+'px'
        nav.style.backgroundColor=' #ffffff00'
    }
})

// const langue = document.getElementById('Langue');
// const subMenu = document.querySelector('.sub-menu-1');

// langue.addEventListener('mouseover', () => {
//     subMenu.classList.add('.active');
// });

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const sidebar = document.querySelector('.sidebar');

    burgerMenu.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        burgerMenu.classList.toggle('active');
        console.log("erreur")
    });
});