$(function () {
    $('.main__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false
                }
            }
        ]
    });
    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow:3
                }              
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow:2
                }              
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow:1
                }              
            }
        ]
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });
});