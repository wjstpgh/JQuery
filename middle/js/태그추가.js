$(function( ){
    //$()리턴값은 객체인스턴스
    $('div').css('border','3px solid #b90');
    var cnt=0;
    $('#addMenu').click(function(){
        cnt++;
        $('#menu').append('<li>menu'+cnt+'</li>');
    });
    var $menu=$('#menu');
    $menu.append('<li>menu2</li>');
    $menu.append('<li>menu3</li>');
    $menu.append('<li>menu4</li>');
    $menu.append('<li>menu5</li>');
    $menu.append('<li>menu6</li>');
    $menu.css('border','2px solid aqua');
});