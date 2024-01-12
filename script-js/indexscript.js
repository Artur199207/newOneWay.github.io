let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.slider-image').length;
    const slider = document.getElementById('image-slider');

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlider();
    }

    function updateSlider() {
      const translateValue = -currentSlide * 100 + '%';
      slider.style.transform = 'translateX(' + translateValue + ')';
    }


    setInterval(() => {
      nextSlide();
    }, 5000);

    setTimeout(() => {
      document.querySelector('.old-div').style.display = 'block';
      document.querySelector('.wave').style.display = 'none'
  }, 2000);