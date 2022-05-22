$(function( ){
    $('#tabmenu1 li').click(function(e){
        alert('인덱스 값 : '+$(this).index());
    });
    //1초 간격으로 탭 메뉴가 select적용
    var currentIndex=0;
    var $menuitems=$('#tabmenu1 li');
    var timerId=setInterval(function(){
        var $item=$menuitems.eq(currentIndex);
        //인덱스로 찾아온 li객체에 select클래스 추가
        $item.addClass('select');
        currentIndex++;
        if(currentIndex>=$menuitems.length){
            clearInterval(timerId);
        }
        console.log(currentIndex);
    },1000);
});