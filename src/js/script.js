$(document).ready(function(){
    $('.carousel__inner').slick({
        // fade: true,
        // cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        // autoplay: true,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prevArrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/nextArrow.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                    }
                }
            ]
        });
        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
            $(this)
              .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
              .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
          });

          
          function toggleSlide(item) {
            $(item).each(function(i) {
                $(this).on('click', function(e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                });
              });
          }
          toggleSlide('.catalog-item__back');
          toggleSlide('.catalog-item__link');

          //Modal



          const btn = document.querySelectorAll('[data-modal=consultation]'),
                modal = document.querySelector('.modal'),
                cover = document.querySelector('.cover'),
                close = document.querySelector('.modal-btn-close'),
                btnMini = document.querySelectorAll('[data-modal="order"]'),
                orderModal = document.querySelector('[data-modal="form"]');




                btn.forEach((item) => {
                    item.addEventListener('click', () => {
                        openModal();
                    });
                });

                btnMini.forEach((item) => {
                    item.addEventListener('click', () => {
                        openOrderModal();
                        // console.log('click');
                    });
                });

                function openModal() {
                    cover.classList.add('show');
                    modal.classList.add('show');
                }

                function openOrderModal() {
                    orderModal.classList.add('show');
                    cover.classList.add('show');
                }


                cover.addEventListener('click', (event) => {
                    if (event.target === cover && cover.classList.contains('show')) {
                        closeModal();
                    }
                });
                close.addEventListener('click', () => {
                    closeModal();
                });
                document.addEventListener('keydown', (e) => {
                    if (e.code === "Escape" && cover.classList.contains('show')) { 
                        closeModal();
                    }
                });

          function closeModal() {
                    cover.classList.remove('show');
                    modal.classList.remove('show');
            }


        
});

