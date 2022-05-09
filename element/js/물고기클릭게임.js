var cnt=0;
var $score=null;
var $fish=null;
var play=false;
var timerID=0;

$(document).ready(function(){
    init();
    initEvent();
});
function init(){//초기화함수
    $score=$('#score');
    $fish=$('#fish');
}
function initEvent(){//이벤트 등록부
    $('#start').click(function(){//게임시작 버튼함수
        startGame();
    });
    $('#fish').click(function(){//물고기클릭시 점수추가함수
        addScore();
    });
}
function startGame(){
    if(play==false){//플레이중이 아닐때 게임시작
        checkEndGame();
        play=true;
        timerID=setInterval(function(){
            //물고기 움직이기
            moveFish();
        },1000);
    }
}
function addScore(){
    if(play){
        cnt++;
        $score.html(cnt);
    }
}
//물고기 움직이는 함수
function moveFish(){
    //물고기크기 120&70
    //패널의크기 600*400
    //x이동영역 0~480
    //y이동영역 0~330
    var x=parseInt(Math.random()*480);
    var y=parseInt(Math.random()*330);
    
    $fish.css({
        left:x,
        top:y
    });
}
function checkEndGame(){
    //5초뒤 게임종료
    setTimeout(function(){
        play=false;
        //물고기 함수 종료
        clearInterval(timerID);
        alert('게임종료');
        cnt=0;
    },10000);
}