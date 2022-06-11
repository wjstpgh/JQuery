$(function(){
    //움직일 대상 가져오기
    var $img1=$('#target');
    //나타나는 효과
    $('#show').on('click',function(){
        $img1.show(6000,'easeInOutQuint');
    });
    //사라지는 효과
    $('#hide').on('click',function(){
        $img1.hide(6000,'easeInCirc');
    });
});