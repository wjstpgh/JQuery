//전역변수 선언
var $fish=null;
var step=50;//이동할 거리
var timerID=0;

$(document).ready(function(){
    init();
    ininEvent();
});
//요소 초기화
function init(){
    $fish=$('#fish');
}
//이벤트 등록
function ininEvent(){//물고기움직이는 이벤트 등록
    $('#btnStart').click(function(){
        start();
    });
    $('#btnStop').click(function(){
        stop();
    });
}
//물고기 움직이기 타이밍
function start(){
    if(timerID==0){
        timerID=setInterval(function(){
            //물고기 움직이기
            moveFish();
        },100);
    }
}
//물고기 멈추기
function stop(){
    clearInterval(timerID);
    timerID=0;
}
//물고기 움직이기
function moveFish(){
    //물고기의 다음위치
    var x=$fish.position().left+step;

    //물고기위치가 430을 넘을때 머리방향바꿔줌
    if(x>=430){
        //.attr()함수는 선택자로 선택된 요소의 속성을 가져옴
        $fish.attr('src','resource/fish2.png');
        step=-50;
    }
    //물고기위치가 50보다 작을때 머리방향 바꿔줌
    if(x<50){
        //.attr()함수는 선택자로 선택된 요소의 속성을 가져옴
        $fish.attr('src','resource/fish1.png');
        step=50;
    }
    //물고기 위치 설정
    $fish.css('left',x);
}