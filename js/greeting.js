let btn = $('.greeting button'),
    greetingContent = $('.greeting_container');

btn.click(function(){
    btn.removeClass('active');
    $(this).addClass('active');

    greetingContent.removeClass('active');
    greetingContent.eq($(this).index()).addClass('active');
});

if($(location).attr('href').indexOf('chairman') > -1){
    btn.eq(0).trigger('click');
}else{
    btn.eq(1).trigger('click');
}
