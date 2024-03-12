$(".about-us #cerrtificate .slider .items").slick({
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.about-us #cerrtificate .slider .action .prev_slide'),
    nextArrow: $('.about-us #cerrtificate .slider .action .next_slide'),

    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                rtl: true,
                fade:false
            }
        },
    ]
});

// $(".about-us #cerrtificate .slider").slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     dots: false,
//     centerMode: true,
//     variableWidth: true,
//     infinite: true,
//     focusOnSelect: true,
//     cssEase: 'linear',
//     touchMove: true,
// });