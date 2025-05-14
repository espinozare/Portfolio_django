document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('hidden', i !== index);
        });
    }
    
    document.querySelector('.carousel-prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });
    
    document.querySelector('.carousel-next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
    
    showSlide(0);
});