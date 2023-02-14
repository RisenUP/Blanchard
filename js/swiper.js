let slider = document.querySelector('.hero-swiper__container');
let slider1 = document.querySelector('.gallery-swiper__container');
let slider2 = document.querySelector('.event-swiper__container');
let slider3 = document.querySelector('.project-swiper__container');


let mySwiper = new Swiper(slider, {
  wrapperClass: 'hero-swiper__wrapper',
  slideClass: 'hero-swiper__slide',
	loop: true,
	slidesPerView: 1,
  autoplay: {
    delay: 3000,
  }
})

let mySwiper1 = new Swiper(slider1, {
	loop: true,
	slidesPerView: 1,
  slidesPerGroup: 1,
  wrapperClass: 'gallery-swiper__wrapper',
  slideClass: 'gallery-swiper__slide',
  // Responsive breakpoints
  navigation: {
    nextEl: '.gallery-swiper__button-next',
    prevEl: '.gallery-swiper__button-prev',
  },
  pagination: {
    el: '.gallery-swiper__pagination',
    type: 'fraction',
  },
  breakpoints: {
    // when window width is >= 600-px
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40,
      slideToClickedSlide: true,
    },
     // when window width is >= 1370-px
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

  },
})


let mySwiper2 = new Swiper(slider2, {
  slidesPerView: 1,
  spaceBetween: 33,
  wrapperClass: 'event-swiper__wrapper',
  slideClass: 'event-swiper__slide',
  pagination: {
    el: '.event-swiper__pagination',
    horizontalClass: 'event-swiper__pagination--horizontal',
    bulletClass: 'event-swiper__pagination--bullet',
    bulletActiveClass: 'event-swiper__pagination--active',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.event-swiper__button-next',
    prevEl: '.event-swiper__button-prev',
  },

  breakpoints: {
    // when window width is >= 600px
   700: {
    slidesPerView: 2,
    slidesPerGroup: 2,
   },

    // when window width is >= 1025px
   1024: {
    slidesPerView: 3,
    slidesPerGroup: 3,
  },

},

})

let mySwiper3 = new Swiper(slider3, {
	loop: true,
  wrapperClass: 'project-swiper__wrapper',
  slideClass: 'project-swiper__slide',
  spaceBetween: 50,
  slidesPerView: 1,
  navigation: {
    nextEl: '.project__button-next',
    prevEl: '.project__button-prev',
  },

  breakpoints: {
    // when window width is >= 1024px
    701: {
      slidesPerView: 2,
     },

   1025: {
    spaceBetween: 50,
    slidesPerView: 3,
    slidesPerGroup: 3,
   },


 },
})
