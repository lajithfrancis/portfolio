const slider = document.querySelector('.slider');
let slides = slider.children;
let currentSlide = 0;
let isScrolling = false;

slider.addEventListener('scroll', debounce(handleScroll, 0));

function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

function handleScroll() {
  if (isScrolling) return;
  isScrolling = true;

  if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
    // Move the first slide to the end when reaching the end of the slider
    slider.appendChild(slides[0]);
    slides = slider.children;
    slider.scrollLeft = slider.scrollLeft - slides[0].offsetWidth;
  } else if (slider.scrollLeft <= 0) {
    // Move the last slide to the beginning when reaching the beginning of the slider
    slider.insertBefore(slides[slides.length - 1], slides[0]);
    slides = slider.children;
    slider.scrollLeft =
      slider.scrollLeft + slides[slides.length - 1].offsetWidth;
  }

  isScrolling = false;
}


// slider.addEventListener('scroll', () => {
//   if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
//     // Move the first slide to the end when reaching the end of the slider
//     slider.appendChild(slides[0]);
//     slides = slider.children;
//     slider.scrollLeft = slider.scrollLeft - slides[0].offsetWidth;
//   } else if (slider.scrollLeft <= 0) {
//     // Move the last slide to the beginning when reaching the beginning of the slider
//     slider.insertBefore(slides[slides.length - 1], slides[0]);
//     slides = slider.children;
//     slider.scrollLeft =
//       slider.scrollLeft + slides[slides.length - 1].offsetWidth;
//   }
// });
