let btn = $('.greeting button'),
    greetingContent = $('.greeting_container');

btn.click(function(){
    btn.removeClass('active');
    $(this).addClass('active');

    greetingContent.removeClass('active');
    greetingContent.eq($(this).index()).addClass('active');
});

btn.eq(0).trigger('click');
