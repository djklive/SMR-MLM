const carouselWidth = document.querySelector('.carousel').offsetWidth;

    let nbr=6
    let p=0

    let container = document.querySelector('.container')
    let g =document.querySelector("#g")
    let d =document.querySelector("#d")
    container.style.width=(carouselWidth*nbr)+'px'
    for (let i = 1; i <= nbr; i++) {
        let div =document.createElement('div')

        div.className='photo'
        div.style.backgroundImage="url('caroussel/"+i+".JPG')"

        container.appendChild(div)
    }


setInterval(() => {
    if (p>-nbr+1) {
        p--;
        container.style.transform='translate('+p*carouselWidth+'px)'
        container.style.transition=".6s ease"
    }
}, 30000);
// setInterval(() => {
//     if (p<0) {
//         p++;
//        container.style.transform='translate('+p*1525+'px)'
//        container.style.transition=".6s ease"
//   }
// }, 3000);

g.addEventListener('click',()=>{
    if (p>-nbr+1) {
        p--;
        container.style.transform='translate('+p*carouselWidth+'px)'
        container.style.transition=".6s ease"
    }
})
    d.addEventListener('click',()=>{
       if (p<0) {
             p++;
            container.style.transform='translate('+p*carouselWidth+'px)'
            container.style.transition=".6s ease"
       }
    })


// // Get the carousel elements
// const carousel = document.querySelector('.carousel');
// const container = document.querySelector('.carousel .container');
// const photo = document.querySelector('.photo');

// // Function to adjust carousel width based on screen size
// function adjustCarouselWidth() {
//   const screenWidth = window.innerWidth;

//   if (screenWidth < 1250) { // For small screens (e.g., mobile devices)
//     carousel.style.width = '1238px'; // or any other value you prefer
//     container.style.width = '1238px';
//     photo.style.width = '1238px';
//   } else if (screenWidth < 1450) { // For medium screens (e.g., tablets)
//     carousel.style.width = '1440px'; // or any other value you prefer
//     container.style.width = '1440px';
//     photo.style.width = '1440px';
//   } else if (screenWidth < 1024) { // For large screens (e.g., desktops)
//     carousel.style.width = '1020px'; // or any other value you prefer
//     container.style.width = '1020px';
//     photo.style.width = '1020px';
//   }
// }

// // Call the function initially to set the width
// adjustCarouselWidth();

// // Add an event listener to adjust the width on screen resize
// window.addEventListener('resize', adjustCarouselWidth);

