let buttons = document.querySelectorAll("[data-carousel-button]");
let carousel = document.querySelector(".carousel")
let carouselImages = document.querySelector(".carousel-images");
let carouselImagesChildren = carouselImages.children;
let isInCarousel = false;
carousel.addEventListener("mouseover", () => {
    isInCarousel = true;
})
carousel.addEventListener("mouseout", () => {
    isInCarousel = false;
})
function changeImage(change) {
    
    let activeSlide = carouselImages.querySelector("[data-active]");
    let offsetIndex = [...carouselImagesChildren].indexOf(activeSlide) + change;
    
    if (offsetIndex > carouselImagesChildren.length - 1){
        offsetIndex = 0;
    }   
    if (offsetIndex < 0){
        offsetIndex = carouselImagesChildren.length - 1;    
    } 
    
    carouselImagesChildren[offsetIndex].dataset.active = true;
    carousel.style.background = carouselImagesChildren[offsetIndex].dataset.color;
    delete activeSlide.dataset.active;
}
buttons.forEach( (button) => {
    button.addEventListener("click", () => {
        let change = button.dataset.carouselButton === "prev" ? 1 : -1;
        changeImage(change);
    })
})

let sliderInterval = window.setInterval( () => {
    if (!isInCarousel) changeImage(1);
}, 3000)