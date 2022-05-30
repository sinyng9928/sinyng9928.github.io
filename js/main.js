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

/* IR */
let ir = $('.ir'),
    irOST = ir.offset().top,
    excuted = false,
    irGraph = $('.ir .graphs svg rect'),
    irNum = $('.ir .graphs_value');

$(window).scroll(function(){
    if(!excuted && $(this).scrollTop() > irOST - 500){
        irGraph.each(function(){
            let targetHeight = $(this).attr('data-height');
            $(this).animate({height: targetHeight}, 900, 'linear');
        });
        irNum.each(function(){
            let targetNum = $(this).attr('data-num'),
                targetIr = $(this);
            $({rate: 0}).animate({rate: targetNum},
                {
                    duration: 900,
                    progress: function(){
                        let now = this.rate.toFixed(1);
                        targetIr.text(now);
                    }
                });
        });
        excuted = true;
    }
});