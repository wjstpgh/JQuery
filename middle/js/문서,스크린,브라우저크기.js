$(function( ){
    $(window).on('resize',function(){
        showInfo();
    });
    showInfo();

    function showInfo(){
        var str='';
        str+='문서의 너비 : '+$(document).width()+'<br/>';
        str+='문서의 높이 : '+$(document).height()+'<br/>';
        //스크린의 화면크기는 출력과  작업표시줄을 다 포함하는 해상도를 출력
        str+='스크린의 너비 : '+screen.width+'<br/>';
        str+='스크린의 높이 : '+screen.height+'<br/>';
        //유효한 화면, 작업표시줄을 제외한 크기
        str+='유효 스크린의 너비 : '+screen.availWidth+'<br/>';
        str+='유효 스크린의 높이 : '+screen.availHeight+'<br/>';
        //윈도우의 기본크기 (메뉴바,툴바,스크롤바등을) 제외한 영역
        str+='브라우저의 내부 너비 : '+window.innerWidth+'<br/>';
        str+='브라우저의 내부 높이 : '+window.innerWidth+'<br/>';
        //윈도우의 기본크기 + 메뉴바+툴바 (스크롤바) 제외
        str+='브라우저의 너비 : '+$(window).width()+'<br/>';
        str+='브라우저의 높이 : '+$(window).height()+'<br/>';
        //윈도우의 전체크기
        str+='브라우저의 외부 너비 : '+window.outerWidth+'<br/>';
        str+='브라우저의 외부 높이 : '+window.outerWidth+'<br/>';
        $('#info').html(str);
    }
});