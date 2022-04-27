$(document).ready(function(){
    var $gigu=$('#gigu');//지구이미지 웹요소 찾기
    $('#btnStart').click(function(){
        $gigu.animate({
            left:"480px"
        },3000);//3초간 왼쪽값을 480으로 만들어줌
    });
});