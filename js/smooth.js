            const btnn = document.querySelector('.hero__btn');
            const formm = document.querySelector('.footer');

            // При клике на кнопку
            btnn.addEventListener('click', e => {
              // Прокрутим страницу к форме
              formm.scrollIntoView({
                block: 'nearest', // к ближайшей границе экрана
                behavior: 'smooth', // и плавно
              });
            });
