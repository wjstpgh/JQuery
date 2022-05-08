$(document).ready(function(){
    $('#btnStart').click(function(){
        start();
        document.write('시작');
    })

    function start(){
        var cnt=0;
        //클로저 함수
        setInterval(function(){//0.3초마다 cnt출력
            cnt++;//외부함수의 지역변수를 사용하여 메모리에서 제거가안됨
            document.write(cnt+'<br/>');
        },300);
    }
});