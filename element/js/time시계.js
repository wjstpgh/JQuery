var $clock=null;
$(document).ready(function(){
    $clock=$('#clock');
    //시간 출력 함수 호출
    clock();
})
function clock(){
    //10보다 작은 값일때 00문자로 변환
    function addZero(value){
        if(value<10){
            value='0'+value;
        }
        return value;
    }
    //현재 시간 출력
    function showClock(){
        var date=new Date();
        var hour=addZero(date.getHours());
        var min=addZero(date.getMinutes());
        var sec=addZero(date.getSeconds());

        var time=hour+':'+min+':'+sec;
        $clock.html(time);
    }
    showClock();
    setInterval(function(){
        showClock();
    },900);
}