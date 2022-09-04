"use strict";

var programSwiper = new Swiper(".programSwiper", {
  loop: true,
  slidesPerView: "auto",
  loopedSlides: 17,
  grabCursor: true,
  mousewheel: true,
  freeMode: true,
  speed: 1500,
  autoplay: {
    delay: 0,
    waitForTransition: false
  },
  breakpoints: {
    320: {
      spaceBetween: 8
    },
    768: {
      spaceBetween: 16
    }
  }
});
//# sourceMappingURL=all.js.map
