function hi(name){//first-class함수의 특징
    document.write(name+'님 환영합니다.<br/>');
}
hi('홍길동');
var fhi=hi;//변수에 함수를 저장가능___1
fhi('임꺽정');

var func=function(){
    document.write('함수 리터럴<br/>');
}    
func();

//함수를 매개변수로 쓰는 방법___2
function hi1(){
    alert('hi1입니다.');
}
function hi2(){
    alert('hi2입니다.');
}
function exec(func){
    func();
}
exec(hi1);
exec(hi2);

//return값으로 함수 이용
$(document).ready(function(){
    function hi3(){
        document.write('hi3입니다.');
    }
    $('#btnStart').click(hi3);
});

//return문으로 익명함수 이용
setInterval(function(){
    document.write('익명함수<br/>');
},5000);//setInterval()는 window전역객체에 존재하며 타이머함수의 일종
//주어진 시간동안 지연하다가 주어진 함수를 실행한다.

//return값으로 중첩함수 이용
function deco(){
    function deco_hi(name){
        document.write(name+'님 이건 중첩함수이다.');
    }
    return deco_hi;
}
//deco의 리턴값인 deco_hi를 받아주는 deco 변수
var deco=deco();
deco('중첩함수 대입할까');