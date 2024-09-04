// const initSlider = () => {
//     const imageList = document.querySelector(".products__pills .box-container");
//     const slideButtons = document.querySelectorAll(".products__pills .slide-button");
//     const maxScrollLeft =  imageList.scrollWidth - imageList.clientWidth;


//     // Slide images according to the slide button clicks
//     slideButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             const direction = button.id === "prev-slide"  ? -1 : 1;
//             const scrollAmount = imageList.clientWidth * direction
//             imageList.scrollBy({ left: scrollAmount, behavior: "smooth" })
//         })
//     });

    // const handleSlideButtons = () => {
    //     // Hide/show slide buttons based on the scroll position
    //     slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block"
    //     slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block"
    // }

    // imageList.addEventListener("scroll", () => {
    //     handleSlideButtons();
    // })
// }

// window.addEventListener("load", initSlider);

// Selection des différents element 
// boite contenant le carousel(carouselContainer)
// les boutons de navigation du carousel(slideButtons)
// utilise les paramètres ou fonctions scrollWidth et clientWidth pour determiner le carousel a fini d’être scroller ou pas
const carouselContainer = document.querySelector('.box-container');
const slideButtons = document.querySelectorAll('.slide-button');
const maxScrollLeft =  carouselContainer.scrollWidth - carouselContainer.clientWidth;

// Lorsqu'un bouton est cliqué, il détermine la 
// direction du défilement (gauche ou droite)
// et fait défiler le conteneur du carrousel de la largeur d'un élément.
slideButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const direction = e.target.id === 'd' ? '-1' : '1';
    carouselContainer.scrollBy({
      left: direction * 300, // ajuster la quantité de défilement en fonction de la largeur de l'élément
      behavior: 'smooth',
    });
  });
});

const handleSlideButtons = () => {
    // Masquer/afficher les boutons coulissants en fonction de la position de défilement
    slideButtons[0].style.display = carouselContainer.scrollLeft <= 0 ? "none" : "block"
    slideButtons[1].style.display = carouselContainer.scrollLeft >= maxScrollLeft ? "none" : "block"
}

carouselContainer.addEventListener("scroll", () => {
    handleSlideButtons();
})



// Dans ce JavaScript, nous sélectionnons la section products__pills 
// et ajoutons un écouteur d'événement à l'événement de défilement de la fenêtre. 
// Lorsque l'utilisateur fait défiler, nous vérifions si la position de défilement se situe dans les limites de la section.
//  Si c'est le cas, nous ajoutons la classe animer à la section,
// ce qui déclenche l'animation CSS.
const productsPillsSection = document.querySelector('.products__pills');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const sectionTop = productsPillsSection.offsetTop;
    const sectionBottom = sectionTop + productsPillsSection.offsetHeight;
  
    if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
       // Cela ajoutera un délai de 500 ms à l'animation,
       // de sorte qu'elle démarre 0,5 seconde après l'apparition de la section.
      setTimeout(() => {
        productsPillsSection.classList.add('animate');
      }, 1000); // ajustez le temps de retard à votre guise
    }
  });

  function animation(distance,cible,animation) {
    window.addEventListener('scroll',()=>{
        if (document.documentElement.scrollTop>distance) {
            // document.querySelector('body').style.backgroundColor='black'
           cible.style.animation=animation
        }
    })
}
//liste des produit
animation(150,contenaireProduit,'animProduit 6s ease')

//presentation de l'entreprise
let imageEntreprise=document.querySelector('.imageEntreprise')

animation(420,imageEntreprise,'animImageEntreprise 4s ease')
let infoEntreprise=document.querySelector('.info')

animation(420,infoEntreprise,'animInfoEntreprise 4s ease')

//presentation fondateur

let infoFondateur=document.querySelector('.infos2')

animation(750,infoFondateur,'animInfoFondateur 4s ease')