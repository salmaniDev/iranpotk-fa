$(".blog_hero .slider").slick({
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    rtl: true,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.blog_hero .prev_slide'),
    nextArrow: $('.blog_hero .next_slide'),
});