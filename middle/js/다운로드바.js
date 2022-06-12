$(function( ){
    var text=null;

    $('#btnStart').on('click',function(e){
        $('.bar').stop().animate({
            width:'500px'
        },2000,'linear',function(){
            text='설치 완료';
            $('#text').html(text);
        });
    });

    $('#btnEnd').on('click',function(e){
        $('.bar').stop().animate({
            width:'1px'
        },2000,'swing',function(){
            text='설치 취소';
            $('#text').html(text);
        });
    });
});