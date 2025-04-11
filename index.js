window.addEventListener('scroll', () => {
    if (Math.random() < 0.03) {
      addPawPrint();
    }
  });

function showContent() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('content').style.display = 'flex';
    addPawPrint();
}

function showNo() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('no').style.display = 'flex';
    addPawPrint();
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

let touchStartX = 0;
let touchEndX = 0;

const sliderContainer = document.getElementById('slider-container');

sliderContainer.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

sliderContainer.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        changeSlide(1);
    }
    if (touchEndX > touchStartX + 50) {
        changeSlide(-1);
    }
}

function addPawPrint() {
    const paw = document.createElement('img');
    paw.src = 'assets/dog-paw-svgrepo-com.svg';
    paw.className = 'paw-print';
    paw.style.top = `${window.scrollY + Math.random() * window.innerHeight}px`;
    paw.style.left = `${Math.random() * window.innerWidth}px`;
    document.body.appendChild(paw);
  
    setTimeout(() => paw.remove(), 3000);
  }