$(function(){
    //움직일 대상 가져오기
    var $img1=$('#target');
    //나타나는 효과
    $('#show').on('click',function(){
        $img1.fadeIn(6000,'easeInQuint',function(){
            alert('fadein');
        });
    });
    //사라지는 효과
    $('#hide').on('click',function(){
        $img1.fadeOut(6000,'easeOutQuint',function(){
            alert('fadeOut');
        });
    });

    $('#show').on('click',function(){
        $img1.slideDown(6000,'easeInBounce');
    });
    //사라지는 효과
    $('#hide').on('click',function(){
        $img1.slideUp(6000,'easeOutBounce');
    });
});