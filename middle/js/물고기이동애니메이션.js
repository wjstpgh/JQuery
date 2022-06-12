$(function( ){
    var $fish=$('#fish');
    var $info=$('#info');

    $('#panel').click(function(e){
        //클릭한 위치값 구하기
        var offsetX=e.pageX-$(this).offset().left;
        var offsetY=e.pageY-$(this).offset().top;
        var str='X : '+offsetX+', Y : '+offsetY;

        $info.html(str);

        $fish.animate({
            left:offsetX,
            top:offsetY
        },1000,'easeOutBounce');
    });
});