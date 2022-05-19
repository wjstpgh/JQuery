$(function( ){
    $(document.body).click(function(){
        $(document.body).append($('<div>'));
        //div노드의 길이를 출력
        var length=$('div').length;
        $('span').text('div태그 갯수 : '+length);
    });
    //div객체를 배열로 생성
    var $divList=$('div');
    //두번째 div가져오기, eq는 div의 jQuery객체가 리턴
    var $div_two=$divList.eq(1);
    $div_two.css('background','blue');
    //eq와 get의 차이점, get은 element요소가 넘어옴
    var $div_one=$divList.get(0);
    $div_one.style.background='aqua';
    //[]로 인덱스를 주어 노드를 찾기,element로 리턴
    var $div_five=$divList[4];
    $div_five.style.border='3px solid yellow';
});