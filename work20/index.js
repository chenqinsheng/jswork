//
$('#fold>ul>li:first').find('.warp').css({
    display:'block'
});
//
$('fold>ul>li').click(function () {
    $(this).siblings('li').find('.warp').css({
        display:'none'
    });
    $(this).find('warp').css({
        display:'block'
    });
});