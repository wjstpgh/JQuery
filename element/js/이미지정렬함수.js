$(document).ready(function(){
    init();
    initEvent();
});

var $img=null;

function init(){
    $img=$('#container1 img');//배열로 이미지태그들 받기
}
function initEvent(){
    $('#btnStart').click(function(){
        showImage();
    });
}
function showImage(){
    for(var i=0;i<$img.length;i++){//이미지 나열
        
        var x=100+((i%3)*200);
        var y=100+(parseInt(i/3)*200);

        $img.eq(i).css({
            left:x,
            top:y
        });
    }
}