const slides = document.getElementsByClassName('caroussel__item');
const dots = document.getElementsByClassName('caroussel__dot')
let pos = 0;
const total = slides.length;
let t;

document.getElementById('caroussel__button__next').addEventListener('click', moveToNextSlide);
document.getElementById('caroussel__button__prev').addEventListener('click', moveToPrevSlide);


function hideSlides() {
    for (let s of slides) {
        s.classList.remove('caroussel__item__visible')
        s.classList.add('caroussel__item__hidden')
    }

    for (let dot of dots) {
        dot.classList.remove('active')
    }
}

function showSlide(posIn) {
    hideSlides();
    slides[posIn].classList.add('caroussel__item__visible')
    dots[posIn].classList.add('active')
    t = setTimeout(moveToNextSlide, 6000)

}

function moveToNextSlide() {
    if (pos === total - 1) {
        pos = 0
    } else {
        pos++;
    }
    clearTimeout(t)
    showSlide(pos)
}





function moveToPrevSlide() {
    if (pos === 0) {
        pos = total - 1
    } else {
        pos--;
    }
    clearTimeout(t)
    showSlide(pos)
}

showSlide(0)
