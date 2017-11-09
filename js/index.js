/**
 * Created by ZK on 2017/11/9.
 */

$(function () {
    document.addEventListener('touchstart', function() {}, false);

    $('.title').append('<img class="arrow" src="imgs/icon_hide.png">');

    $('.cell').addClass('collapse');
    $('.desc').hide();
    $(location.hash).removeClass('collapse').find('.desc').slideToggle(200);

    var preEle = null;
    $('.title').on('click', function() {
        var $parent = $(this).closest('.cell');
        var $content = $parent.find('.desc');
        $parent.toggleClass('collapse');

        preEle && !preEle.is($content) && preEle.slideToggle();
        $content.slideToggle(200);
        preEle = $content;

        $(this).find('.arrow').toggleClass('rotate');
    });
});