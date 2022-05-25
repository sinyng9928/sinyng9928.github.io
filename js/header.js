let header = $('header'),
    menu = header.find('nav > .main_menu > li'),
    headerHeight = header.outerHeight();

menu.hover(function(){
    header.addClass('sticky');
    let newHeight = $(this).find('ul').outerHeight() + headerHeight;
    header.stop().animate({height: newHeight}, 300);
},
function(){
    header.stop().animate({height: headerHeight}, 300);
    header.removeClass('sticky');
});

let sitemapBtn = $('.sitemap_btn'),
    sitemap = $('.sitemap');

sitemapBtn.click(function(e){
    e.preventDefault();
    sitemap.toggleClass('active');
    header.toggleClass('sticky');
    if(sitemap.hasClass('active')){
        sitemapBtn.find('span').text('close');
    }else{
        sitemapBtn.find('span').text('menu');
    }
});

let searchBtn = $('.search_btn'),
    searchForm = $('.search_form');
    
searchBtn.click(function(e){
    e.preventDefault();
    searchForm.toggleClass('active');
    header.toggleClass('sticky');
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
    if(sltBox.hasClass('active')){
        $(this).find('span').text('expand_more');
    }else{
        $(this).find('span').text('expand_less');
    }
});
