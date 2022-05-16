//js_버튼을 클릭하면 메시지를 출력
window.onload=function(){
    var btn1=document.getElementById('btn1');
    //IE7버전 이하 크로스브라우징처리
    if(btn1.attachEvent){
        btn1.attachEvent('onclick',function(){
            alert('helloIE');
        });
    }
    //IE7브라우저가 아닌경우
    else{
        btn1.addEventListener('click',function(){
            alert('helloALL');
        });
    }
}
//jQuery_버튼을 클릭하면 메시지 출력
$(document).ready(function(){
    $('#btn1').on('click',function(){
        alert('hiQuery');
    });
});