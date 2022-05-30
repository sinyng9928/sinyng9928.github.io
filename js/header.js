/* Header */
let header = $('header'),
    menu = header.find('nav > .main_menu > li'),
    headerHeight = header.outerHeight();

    $('.fixed_menu').hide();
menu.hover(function(){
    header.addClass('sticky');
    let newHeight = $(this).find('ul').outerHeight() + headerHeight;
    header.stop().animate({height: newHeight}, 300);
    header.find('*').removeClass('active');
    if(sitemap.hasClass('active')){
        sitemapBtn.find('span').text('close');
    }else{
        sitemapBtn.find('span').text('menu');
    }
},
function(){
    header.stop().animate({height: headerHeight}, 300);
    header.removeClass('sticky');
});
$(window).scroll(function(){
    if($(this).scrollTop() > header.outerHeight()){
        header.addClass('sticky');
        $('.fixed_menu').fadeIn(1000);
    }else{
        header.removeClass('sticky');
        $('.fixed_menu').fadeOut(1000);
    }
});
/* Sitemap */
let sitemapBtn = $('.sitemap_btn'),
    sitemap = $('.sitemap');

sitemapBtn.click(function(e){
    e.preventDefault();
    searchForm.removeClass('active');
    sitemap.toggleClass('active');
    if(sitemap.hasClass('active')){
        header.addClass('sticky');
        sitemapBtn.find('span').text('close');
    }else{
        header.removeClass('sticky');
        sitemapBtn.find('span').text('menu');
    }
});

/* Search Form */
let searchBtn = $('.search_btn'),
    searchForm = $('.search_form');
    
searchBtn.click(function(e){
    e.preventDefault();
    sitemap.removeClass('active');
    searchForm.toggleClass('active');
    if(sitemap.hasClass('active')){
        sitemapBtn.find('span').text('close');
    }else{
        sitemapBtn.find('span').text('menu');
    }
    if(searchForm.hasClass('active')){
        header.addClass('sticky');
    }else{
        header.removeClass('sticky');
    }
});

let langBtn = $('.lang_btn'),
    langChoose = $('.lang_choose');
    
langBtn.click(function(e){
    e.preventDefault();
    langChoose.toggleClass('active');
});

/* footer */
let sltBox = $('.slt_box');

sltBox.click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
        $(this).find('span').text('expand_more');
    }else{
        $(this).find('span').text('expand_less');
    }
});
