const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  index = (i + images.length) % images.length;
  slides.style.transform = `translateX(${-index * images[0].clientWidth}px)`;
}

// Button controls
prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));

// Adjust on window resize (for responsive)
window.addEventListener('resize', () => showSlide(index));