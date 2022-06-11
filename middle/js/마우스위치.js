$(function( ){
    var $fish=$('#fish');
    var $info=$('#info');

    $('#panel').click(function(e){
        //panel에 클릭한 전역 위치값 구하기, 웹 브라우저의 내부영역 기준
        var str='전역위치 X : '+e.clientX+', y : '+e.clientY+'<br/>';
        //document를 기준으로 한 위치
        str+='Page위치 X : '+e.pageX+', y : '+e.pageY+'<br/>';

        //$('#info').html(str);

        var offsetX=e.pageX-$(this).offset().left;
        var offsetY=e.pageY-$(this).offset().top;

        str='offsetX : '+offsetX+', offsetY : '+offsetY;
        $info.html(str);

        //클릭한 위치로 물고기 이동
        $fish.css({
            left : offsetX,
            top : offsetY
        });
    });
});