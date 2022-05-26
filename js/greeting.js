let tabBtn = $('.tab button'),
    greetingContent = $('.greeting_container');

tabBtn.click(function(){
    tabBtn.removeClass('active');
    $(this).addClass('active');
    greetingContent.removeClass('active');
    greetingContent.eq($(this).index()).addClass('active');
});