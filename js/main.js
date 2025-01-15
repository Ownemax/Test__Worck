var slideImage1 = document.querySelector('img[src="images/slider1.jpg"]');
var slideImage2 = document.querySelector('img[src="images/slider2.jpg"]');


var images1 = ['images/slider1.jpg', 'images/slider3.jpg'];
var images2 = ['images/slider2.jpg', 'images/slider4.jpg'];

var currentImage1 = 0;
var currentImage2 = 0;

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
var changeImage1 = function() {
  if (isElementInViewport(slideImage1)) {
    slideImage1.src = images1[currentImage1];
    currentImage1 = currentImage1 === 0 ? 1 : 0;
  }
  setTimeout(changeImage1, 2000);
};
var changeImage2 = function() {
  if (isElementInViewport(slideImage2)) {
    slideImage2.src = images2[currentImage2];
    currentImage2 = currentImage2 === 0 ? 1 : 0;
  }
  setTimeout(changeImage2, 2000);
};
changeImage1();
changeImage2();













const swiper = new Swiper(".swiper-servises", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
  
 });

 const swiper2 = new Swiper2(".swiper-events", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
direction: "horizontal",
});
