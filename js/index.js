/**
 * Created by ZK on 2017/11/9.
 */

$(function () {
    FastClick.attach(document.body);
    var scripts = document.getElementsByTagName("script");
    var currID = scripts[scripts.length-1].id;
    $.ajax({
        url: 'source/data_'+ currID +'.json',
        type: 'GET',
        dataType: 'json',
        success: handleSuccess,
    });

    function handleSuccess(data) {
        if (!data.length)  {
            return;
        }
        setupUI(data);
        bindClick();
    }

    function setupUI(dataSource) {
        $(dataSource).each(function (index, ele) {
            var model = dataSource[index];
            var $cell = $('<div class="cell"></div>');
            var $title = $('<div class="title">'+ model.q +'</div>');
            var $desc = $('<div class="desc">'+ model.a +'</div>');
            $cell.append($title).append($desc);
            $('.page-container').append($cell);
        });
        document.addEventListener('touchstart', function() {}, false);
        $('.title').append('<img class="arrow" src="imgs/icon_hide.png">');
        $('.cell').addClass('collapse');
        $('.desc').hide();
        $(location.hash).removeClass('collapse').find('.desc').slideToggle(100);
    }

    function bindClick() {
        var preEle = null;
        $('.title').on('click', function() {
            var $parent = $(this).closest('.cell');
            var $content = $parent.find('.desc');
            $parent.toggleClass('collapse');

            $content.slideToggle(100);

            if (preEle) {
                if (preEle.is($content)) {
                    preEle = null;
                }
                else {
                    preEle.slideToggle();
                    preEle.closest('.cell').find('.title').find('.arrow').toggleClass('rotate');
                    preEle = $content;
                }
            }
            else {
                preEle = $content;
            }
            $(this).find('.arrow').toggleClass('rotate');
        });
    }
});
