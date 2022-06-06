window.onload=function(){
    var $info=$('#info');
    var $fish=$('#fish');

    //4가지 종류의 크기 구하기
    var str ='기본크기 : '+$fish.width()+', '+$fish.height()+'<br/>';
    str+='기본크기 + padding : '+$fish.innerWidth()+', '+$fish.innerHeight()+'<br/>';
    str+='기본크기 + padding + border : '+$fish.outerWidth()+', '+$fish.outerHeight()+'<br/>';
    str+='기본크기 + padding + border + margin : '+$fish.outerWidth(true)+', '+$fish.outerHeight(true)+'<br/>';

    $info.html($info.html()+str);
    //버튼 이벤트 등록
    $('#move').click(function(e){
        //물고기가 이동할 x좌표
        var endX=$('#parent').innerWidth() - $fish.outerWidth() - parseInt($fish.css('margin-right'));
        console.log($('#parent').innerWidth(),$fish.outerWidth(),parseInt($fish.css('margin-right')));

        //물고기 위치 설정
        $fish.css('left',endX);
    })
}