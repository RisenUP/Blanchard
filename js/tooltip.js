const tooltipBtn = document.querySelector('.tooltip');
const text = document.querySelector('.tooltip__text');

tooltipBtn.addEventListener('click', (el) => {
  el.classList.toggle('tooltip--active'),
  text.classList.toggle('tooltip--active')
        })
