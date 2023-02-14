let burger = document.querySelector('.burger');
let menuBurger = document.querySelector('.header__nav');
let menuLinks = menuBurger.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menuBurger.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');

});

menuLinks.forEach((el) => {
el.addEventListener('click', () => {

  burger.classList.remove('burger--active');
  menuBurger.classList.remove('header__nav--active');

  document.body.classList.remove('stop-scroll');

});

})
