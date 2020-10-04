// モーダルウィンドウ
function work1(){
    $('#work1modalWindow').fadeIn();
    $('#work1modalClose, #work1modalBackground').click(function(){
        $('#work1modalWindow').fadeOut();
    });
}

function work2(){
    $('#work2modalWindow').fadeIn();
    $('#work2modalClose, #work2modalBackground').click(function(){
        $('#work2modalWindow').fadeOut();
    });
}

function work3(){
    $('#work3modalWindow').fadeIn();
    $('#work3modalClose, #work3modalBackground').click(function(){
        $('#work3modalWindow').fadeOut();
    });
}

function work4(){
    $('#work4modalWindow').fadeIn();
    $('#work4modalClose, #work4modalBackground').click(function(){
        $('#work4modalWindow').fadeOut();
    });
}

// ハンバーガーメニュー
$(function() {
　  $('.Toggle').click(function() {
        $(this).toggleClass('active');
        $('.menu').toggleClass('open');
        $('#header').toggleClass('active');
        $('#header').toggleClass('aa');
    }); 
    $('.nav').click(function(){
        $('.Toggle').toggleClass('active');
        $('.menu').toggleClass('open');
        $('#header').toggleClass('active');
        $('#header').toggleClass('aa');
    });
});