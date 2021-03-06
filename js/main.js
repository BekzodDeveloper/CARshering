$(function () {
    $('.main__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true
    });
});
$(function () {
    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});