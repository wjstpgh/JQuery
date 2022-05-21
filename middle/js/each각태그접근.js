$(function( ){

    $('.btn1').click(function(){
        //순차적 노드 접근 후 인덱스 출력
        $('.container li').each(function(index){
            document.write('index : '+index+'</br>');
        });
    });
    
    $('.btn2').click(function(){
        //순차적 노드 접근 후 인덱스와 lielement를 출력
        $('.container li').each(function(index, item){
            document.write('index, item : '+index, item.textContent+'</br>');
        });
    });
    
    $('.btn3').click(function(){
        //li객체를 배열로 받음
        var $liList=$('.container li');
        //li객체의 border속성을 루프를 돌면서 테두리 픽셀을 늘려줌
        $liList.each(function(index){
            var Pixel=(index+1)*2;
            $liList.eq(index).css('border',Pixel+'px solid blue');

            $(this).css('margin',Pixel);
        });
    });

    $('.btn4').click(function(){
        var $liList=$('.container li');
        for(var i=0;i<$liList.length;i++){
            $liList.eq(i).css('background-color','gray');
        }
    });

    var $li=$('ul.container li');
    //filter는 선택된 태그 중에서 찾음
    $li.filter('.filter').css('background','aqua');
    $li.find('.find').css('background','blue');

    var $ul=$('ul.container');
    //find는 선택된 태그 안에서 찾음
    $ul.filter('.filter').css('background','aqua');
    $ul.find('.find').css('background','blue');
});