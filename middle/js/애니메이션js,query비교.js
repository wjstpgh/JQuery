//js_버튼클릭하면 애니메이션실행
window.onload=function(){
    var gigu=document.getElementById('gigu');
    var btnStart=document.getElementById('btnStart');

    var left=50;
    var timerID=0;

    //버튼에 이벤트 등록
    btnStart.addEventListener('click',function(){
        //애니메이션
        timerID=setInterval(function(){
            left++;
            gigu.style.left=left+'px';

            //460px에 도달하면 타이머 종료
            if(left>=500){
                clearInterval(timerID);
                timerID=0;
            }
        },10);
    });
}
//jQuery_애니메이션
$(document).ready(function(){
    var $gigu=$('#gigu');
    $('#btnStart').on('click',function(){
        //지구움직이기
        $gigu.animate({
            left:500
        },3000);
    })
})