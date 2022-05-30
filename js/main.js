/* Core Values */
let valueContent = $('.value_contents div');

valueContent.hover(function(){
    $(this).addClass('active');
},
function(){
    $(this).removeClass('active');
});

/* Main Slide */
let mainSlider = new Swiper('.main_slide',{
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 4000,
        pauseonMouseEnter: true,

    },
});

/* Celltrion News */
let newsWrap = $('.news .news_wrap > div');

newsWrap.hover(function(){
    newsWrap.removeClass('active');
    $(this).addClass('active');
},
function(){
    $(this).removeClass('active');
});