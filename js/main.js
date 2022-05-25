let valueContent = $('.value_contents div');

valueContent.hover(function(){
    $(this).addClass('active');
},
function(){
    $(this).removeClass('active');
});