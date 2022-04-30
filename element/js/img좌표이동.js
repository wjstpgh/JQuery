var $gigu=null;//전역변수 선언

$(document).ready(function(){
    init();
    clk_event();
});

function init(){//전역변수 초기화
    $gigu=$('#gigu');//지구본이미지태그
}
function clk_event(){
    $('#btnStart').click(function(){//버튼 이벤트
        var x=parseInt($('#txtX').val());
        var y=parseInt($('#txtY').val());
        moveimg(x,y);
    });
}
function moveimg(x,y){//이미지 이동 함수
    if((x>=0 && x<=500)&&(y>=0 && y<=300)){
        $gigu.css({
            left:x,
            top:y
        });
    }
    else{
        alert('입력된 값이 범위를 벗어남');
    }
}