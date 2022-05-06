var a=100;//전역변수
var b=200;
var c=300;

function outer(){
    //outer함수의 지역변수
    var b=2000;
    var c=3000;
    //중첩함수의 선언과 구현
    function inner(){
        var c=30000;
        //중첩함수는 외부의 변수에 접근이 쉽게 가능하다.
        document.write('1.a='+a+'<br/>');
        document.write('2.b='+b+'<br/>');
        document.write('3.c='+c+'<br/>');
    }
    inner();
}
outer();