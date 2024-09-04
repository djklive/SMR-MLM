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