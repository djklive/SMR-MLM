

    let nbr=6
    let p=0

    let container = document.querySelector('.container')
    let g =document.querySelector("#g")
    let d =document.querySelector("#d")
    container.style.width=(1280*nbr)+'px'
    for (let i = 1; i <= nbr; i++) {
        let div =document.createElement('div')

        div.className='photo'
        div.style.backgroundImage="url('"+i+".JPG')"
       
        container.appendChild(div)
    }
    g.addEventListener('click',()=>{
        if (p>-nbr+1) {
            p--;
            container.style.transform='translate('+p*1280+'px)'
            container.style.transition=".6s ease"
        }
    })
    d.addEventListener('click',()=>{
       if (p<0) {
             p++;
            container.style.transform='translate('+p*1280+'px)'
            container.style.transition=".6s ease"
       }
    })
    
