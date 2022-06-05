$(function( ){
    //gigu노드 가져오기
    var $gigu=$('#gigu');

    //버튼 이벤트 등록
    $('#move').click(function(e){
        //gigu의 위치 구하기
        var currentX=$gigu.position().left+10;
        $gigu.css('left',currentX);
        console.log(currentX);
    });
    //부모좌표노드 구하기
    var $parent=$('#child').offsetParent();
    //부모 id 출력
    console.log('부모 id : '+$parent.attr('id'));

    var $info=$('#info');
    var $fish=$('.fish');
    var $selectFish=null;

    $fish.click(function(e){
        //클릭한 물고기
        $selectFish=$(this);
        var strID=$selectFish.attr('id');

        //지역 좌표 위치값
        var localpos=$selectFish.position();
        var str='id = '+strID+'지역위치, left = '+localpos.left+', top = '+localpos.top+'</br>';

        //전역 좌표 위치값
        var globalpos=$selectFish.offset();
        str+='id = '+strID+'전역위치, left = '+globalpos.left+', top = '+globalpos.top;

        $info.html(str);
    });

    $('#btnAlign').click(function(e){
        //시작위치 설정
        var startX=50;
        var startY=50;
        
        //물고기클래스 모두 루프
        $('.fish').each(function(index){
            //물고기 위치 설정
            $(this).css({
                left:startX,
                top:startY
            });
            startX+=50;
            startY+=50;
        });
    });

    $('#parent').click(function(e){
        //클릭 지접의 전역좌표
        var left=e.pageX;
        var top=e.pageY;
        //전역 위치 설정
        $fish.offset({
            left:left,
            top:top
        });
    });
});