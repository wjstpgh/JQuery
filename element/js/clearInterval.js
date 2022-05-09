$(document).ready(function(){
    var $contents=$('#contents');
    var cnt=0;
    var timerID=0;
    
    //익명함수
    timerID=setInterval(function(){
        cnt++;
        $contents.text(cnt);
    },1000);

    $('#stop').click(function(){
        alert('멈춤');
        clearInterval(timerID);
    });
})