const slides = document.querySelectorAll('.carousel-container_wrapper_carousel-slide');
const totalSlides = slides.length;
let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = 'none';
  }

  slides[currentIndex].style.display = 'block';
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Mostrar el primer slide al cargar la página
showSlide(currentIndex);

// Event listeners para los botones de navegación
document.getElementById('prevBtn').addEventListener('click', prevSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);