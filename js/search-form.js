const btnSearch = document.querySelector('.btn--open');
const btnClose = document.querySelector('.btn--close');
const searchForm = document.querySelector('.search-form--to-open');
const logo = document.querySelector('.header__logo')

btnSearch.addEventListener('click', () => {
  searchForm.classList.toggle('search-form--display');
  btnClose.classList.toggle('btn--close-active');
logo.classList.toggle('header__logo--close');

  setTimeout(() => {
    searchForm.classList.toggle('search-form--visible');
  }, 300);
});

btnClose.addEventListener('click', () => {
  searchForm.classList.remove('search-form--visible');
  setTimeout(() => {
    searchForm.classList.remove('search-form--display');
    btnClose.classList.remove('btn--close-active');
    logo.classList.remove('header__logo--close');
    searchForm.reset();
  }, 300);
});


