window.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function(){
        $('.carousel__inner').slick({
            // fade: true,
            // cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            autoplay: true,
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
      });
});
