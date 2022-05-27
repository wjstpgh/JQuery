window.onload=function(){
    //물고기이미지 가져오기
    var $fish=$('#fish');
    //어항의 크기 구하기
    var panelWidth=parseInt($('#panel').css('width'));
    var panelHeight=parseInt($('#panel').css('height'));
    //물고기가 움직일 영역
    panelWidth=panelWidth-parseInt($fish.css('width'));
    panelHeight=panelHeight-parseInt($fish.css('height'));

    $('#btnStart').click(function(){
        var left=parseInt(Math.random()*panelWidth);
        var top=parseInt(Math.random()*panelHeight);
        //물고기 위치 설정
        $fish.css({
            left:left,
            top:top
        });
    });
}