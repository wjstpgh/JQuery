$(document).ready(function(){
    var $contents=$('#contents');
    var cnt=0;
    //익명함수
    setInterval(function(){
        cnt++;
        $contents.text(cnt);
    },1000);//1초 단위로 값을 증가해서 표시
    
    //일반함수
    function addCnt(){
        cnt++;
        $contents.text(cnt);
    }
    // setInterval(addCnt,1000);
})