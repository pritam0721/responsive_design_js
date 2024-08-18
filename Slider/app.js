const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const preBtn = document.querySelector('.prevBtn');

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener('click', function () {
  counter++;
  carousel();
});
preBtn.addEventListener('click', function () {
  counter--;
  carousel();
});

function carousel() {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
   counter = slides.length -1
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
