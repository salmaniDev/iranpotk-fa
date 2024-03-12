
$(document).ready(function () {
    $("#mainHero .slider").slick({
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        rtl: true,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('#mainHero .prev_slide'),
        nextArrow: $('#mainHero .next_slide'),
    });

    $("#mobileHero .slider").slick({
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        rtl: true,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('#mobileHero .prev_slide'),
        nextArrow: $('#mobileHero .next_slide'),
    });

    $(".section_wrrap .image_slider").slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '60px',
        prevArrow: $('.section_wrrap .prev_slide'),
        nextArrow: $('.section_wrrap .next_slide'),
        // infinite: true,
        // speed: 500,
        // cssEase: 'linear',
        // rtl: true,
        // autoplay: false,
        // autoplaySpeed: 2000,
        // dots: false,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // arrows: true,
    });
})