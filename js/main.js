// モーダルウィンドウ
function work1(){
    $('#modalWindow').fadeIn();
    $('#modalClose, #modalBackground').click(function(){
        $('#modalWindow').fadeOut();
    });
}

// ハンバーガーメニュー
$(function() {
　  $('.Toggle').click(function() {
        $(this).toggleClass('active');
        $('.menu').toggleClass('open');
        $('#header').toggleClass('active');
    }); 
    $('.nav').click(function(){
        $('.Toggle').toggleClass('active');
        $('.menu').toggleClass('open');
        $('#header').toggleClass('active');
    });
});