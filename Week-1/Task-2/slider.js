const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
let slideInterval;

const updateSlider = (index) => {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
};

const startSlider = () => {
    slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slide.length;
        updateSlider(currentIndex);
    }, 3000);
};

const pauseSlider = () => {
    clearInterval(slideInterval);
};

prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slide.length) % slide.length;
    updateSlider(currentIndex);
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slide.length;
    updateSlider(currentIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(currentIndex);
    });
});

document.querySelector('.slider').addEventListener('mouseover', pauseSlider);
document.querySelector('.slider').addEventListener('mouseout', startSlider);

startSlider();
