
document.querySelectorAll('.catalog-submenu__text').forEach(function(tabsBtn) {

    tabsBtn.addEventListener('click', function(e) {

    const road = e.currentTarget.dataset.road;

    document.querySelectorAll('.catalog-submenu__text').forEach(function(tabsContent) {

      tabsContent.classList.remove ('catalog-submenu__text--active')});

    e.currentTarget.classList.add('catalog-submenu__text--active');

    document.querySelectorAll('.catalog__content').forEach(function(tabsBtn) {
      tabsBtn.classList.remove('catalog__content--active')});
      document.querySelector(`[data-finish="${road}"]`).classList.add ('catalog__content--active');
    });

     });
