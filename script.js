const slider = document.querySelector('.slider');
let slides = slider.children;
let currentSlide = 0;

slider.addEventListener('scroll', () => {
  if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
    // Move the first slide to the end when reaching the end of the slider
    slider.appendChild(slides[0]);
    slider.scrollLeft = slider.scrollLeft - slides[0].offsetWidth;
  } else if (slider.scrollLeft <= 0) {
    // Move the last slide to the beginning when reaching the beginning of the slider
    slider.insertBefore(slides[slides.length - 1], slides[0]);
    slider.scrollLeft = slider.offsetWidth;
  }
});
