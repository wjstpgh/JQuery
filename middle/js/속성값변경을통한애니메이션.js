var $view=null;
var currentIndex=1;
var timerId=0;

$(function( ){
    init();//전역변수 초기화 및 함수 호출
    initEvent();//이벤트 초기화함수 등록
});
//초기화 함수
function init(){
    $view=$('#view');
}
//이벤트 초기화
function initEvent(){
    //버튼 이벤트 등록
    $('#play').click(function(){
        startAutoPlay();
    });
    $('#stop').click(function(){
        stopAutoPlay();
    });
    $('#prev').click(function(){
        prevImage();
    });
    $('#next').click(function(){
        nextImage();
    });
}
function startAutoPlay(){
    if(timerId==0){
        //0.1초 마다 nextImage호출
        timerId=setInterval(function(){
            nextImage();
        },100);
    }
}
function nextImage(){
    //다음 이미지 소스 호출
    var index=currentIndex+1;
    //60개의 이미지 순회
    if(index>=60){
        index=1;
    }
    showImage(index);
}
//다음 이미지를 보여주는 함수
function showImage(index){
    $view.attr('src','resource/'+index+'.jpg');
    currentIndex=index;
    console.log('현재 이미지 번호 : '+currentIndex);
}
//이미지 재성 멈춤 함수
function stopAutoPlay(){
    if(timerId!=0){
        clearInterval(timerId);
        timerId=0;
    }
}
//이전 이미지 함수
function prevImage(){
    var index=currentIndex-1;
    //이미지 범위에 따라 최솟점 조절
    if(index<=0){
        index=59;
    }
    showImage(index);
}