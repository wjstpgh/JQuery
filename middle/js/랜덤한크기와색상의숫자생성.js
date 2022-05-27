var cnt=0;
var $panel=null;

$(document).ready(function(){
    init();
    start();
});
function init(){
    $panel=$('#panel');
}
//span생성 0.1초마다
function start(){
    setInterval(addTag,100);
}
//span태그 동적 생성
function addTag(){
    var $span=$('<span></span>');
    //스타일 값 생성
    //색상을 16진수로 랜덤하게 생성
    var color='#'+parseInt(Math.random()*0xffffff).toString(16);
    //10~50px로 글자크기 랜덤하게 생성
    var fontSize=10+parseInt(Math.random()*40)+'px';
    $span.css({
        'color':color,
        'font-size':fontSize,
        'display':'inline-block'
    });
    cnt++;
    $span.html(cnt);
    $panel.append($span);
}