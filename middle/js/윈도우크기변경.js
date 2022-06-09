$(function( ){
    //현재 윈도우 크기를 500으로 변경
    var newWindow=null;

    $('#create').click(function(){
        //새로운 윈도우 생성
        newWindow=window.open('','newWindow','width=500, height=500');
    });

    $('#resize').click(function(){
        //변경할 윈도우여부 확인
        if(newWindow){
            //신규 윈도우 크기 설정
            newWindow.resizeTo(300,300);
        }
    });
    //윈도우 위치 구하기
    var left=window.screenLeft;
    var top=window.screenTop;
    console.log('left : '+left+', top : '+top);

    $(window).on('resize',function(){
        var str='';
        str+='window.outerWidth : '+window.outerWidth+'<br/>';
        str+='window.outerHeight : '+window.outerHeight+'<br/>';
        //윈도우 크기 정보 출력
        $('#info').html(str);
    });
    
    $('#move').click(function(){
        if(newWindow){
            //화면을 기준으로 이동
            newWindow.moveTo(200,200);
            //현재 윈도우를 기준으로 이동
            newWindow.moveBy(200,200);
        }
    });
});