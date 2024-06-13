document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
  
    carousels.forEach((carousel) => {
      const carouselInner = carousel.querySelector('.carousel-inner');
      const prevBtn = carousel.querySelector('.prevBtn');
      const nextBtn = carousel.querySelector('.nextBtn');
      const slides = carousel.querySelectorAll('.carousel-item');
  
      let currentIndex = 0;
      const totalSlides = slides.length;
  
      nextBtn.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
      });
  
      prevBtn.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
      });
  
      function moveToSlide(index) {
        if (index < 0) {
          index = totalSlides - 1; // Volta para o último slide se estiver no primeiro
        } else if (index >= totalSlides) {
          index = 0; // Volta para o primeiro slide se estiver no último
        }
        
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
      }
    });
  });
  