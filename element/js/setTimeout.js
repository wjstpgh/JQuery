$(document).ready(function(){
    var $contents=$('#contents');
    
    //익명함수
    setTimeout(function(){
        $contents.text('10초뒤 익명함수');
    },10000);//한번만 실행되는 함수

    function displayText(){
        $contents.text('10초뒤 일반함수');
    }
    setTimeout(displayText,10000);
})