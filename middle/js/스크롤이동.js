$(function( ){
    $(window).on('scroll',function(){
        //스크롤 위치 구하기
        var str='';
        str+='window.pageXOffset : '+window.pageXOffset+'<br/>';
        str+='window.pageYOffset : '+window.pageYOffset+'<br/>';
        //스크롤 정보 출력
        $('#info').html(str);
    });
    //top버튼 이벤트 등록
    $('#top').click(function(e){
        //화면을 기준으로 스크롤 위치 이동
        //window.scrollTo(0,0);
        //현재 스크롤 위치를 기준으로 이동
        window.scrollBy(100,100);
    });
});