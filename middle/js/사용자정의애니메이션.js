$(function( ){
    var $img=$('#target');

    //나타나는 효과
    $('#show').on('click',function(){
        $img.animate({
            opacity:1,
            left:0,
            top:0
        },3000,'easeInQuint',function(){
            alert('fadeIn');
        });
    });
    //사라지는 효과
    $('#hide').on('click',function(){
        $img.animate({
            opacity:0,
            left:800,
            top:500
        },3000,'easeOutQuint',function(){
            alert('fadeOut');
        });
    });
    //이벤트 중단
    $('#stop').on('click',function(){
        $img.stop();
    });
});