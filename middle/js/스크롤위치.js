$(function( ){
    var $info=$('#info');
    var $container=$('#container');

    //btn에 클릭 이벤트 등록
    $('#btn').click(function(e){
        //스크롤 위치값 구하기
        var str='스크롤 left : '+$container.scrollLeft()+'<br/>';
        str+='스크롤 top : '+$container.scrollTop()+'</br>';

        $info.html(str);
    });

    var scrollEnd=$container.find('img').width()-$container.width();
    $('#set').click(function(e){
        var left=$container.scrollLeft();
        //cnt변수 초기화
        var cnt=0;

        var timerID=setInterval(function(){
            //0.1초마다 5px만큼 왼쪽으로 스크롤
            left+=5;
            $container.scrollLeft(left);
            //스크롤 정보 출력
            cnt++;
            $info.html(cnt+', left : '+left+', ScrollEnd : '+scrollEnd);
            //오른쪽 끝까지 스크롤 되면 멈춤
            if(left>=scrollEnd){
                clearInterval(timerID)
            }
        },100);
    });
});