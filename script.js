var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    function animateBars() {
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        });
    }
    
    // Anima quando a seção fica visível
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateBars();
            observer.unobserve(document.getElementById('skills'));
        }
    }, { threshold: 0.1 });
    
    observer.observe(document.getElementById('skills'));
});