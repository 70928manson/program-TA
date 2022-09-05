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
/* feedback swiper */

var studentSwiper = new Swiper(".studentSwiper", {
  slidesPerView: 'auto'
});
var commentSwiper = new Swiper(".commentSwiper", {
  slidesPerView: 'auto'
});
var imageSwiper = new Swiper(".imageSwiper", {
  controller: {
    control: [studentSwiper, commentSwiper],
    by: 'container'
  },
  cssMode: true,
  slidesPerView: 'auto',
  rewind: true,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
  pagination: {
    el: ".feedback-controller",
    bulletElement: 'a',
    clickable: true
  }
});
var courseSwiper = new Swiper(".courseSwiper", {
  slidesPerView: "auto",
  centeredSlides: false,
  grabCursor: true,
  mousewheel: true,
  breakpoints: {
    320: {
      spaceBetween: 8
    },
    768: {
      spaceBetween: 16
    }
  }
});

if (document.querySelector('#tag')) {
  Array.from(document.querySelectorAll('.item-tag a')).forEach(function (item) {
    item.onclick = function (e) {
      e.preventDefault();
      document.querySelector('.item-tag a[class="active"]').classList.remove('active');
      this.classList.add('active');
    };
  });
}
//# sourceMappingURL=all.js.map
