var count=0;
var $container=null;

$(document).ready(function(){
    $container=$('#container');
    //append는 문자열을 추가하는 함수

    $('#btnPrint').click(function(){//버튼클릭시마다 문자열 append
        $container.append('<p>'+count+'번째 익명함수.');
        hi();
    });
});
//일반함수
function hi(){
    $container.append('<p>'+count+'번째 일반함수.');
    count++;
}