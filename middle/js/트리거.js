$(function( ){
    $('#btnA').on('click',function(e){
        //강제로 btnB에 클릭 이벤트 발생되도록 함
        $('#btnB').trigger('click');
    });

    //btnB 클릭 이벤트
    $('#btnB').on('click',function(e){
        alert('버튼B');
    });

    var cnt=0;
    $('#testspan').on('click',function(e){
        ++cnt;
        $(this).text(cnt);
    });
    //addtest버튼에 testspan 클릭 이벤트를 걸어둠
    $('#addtest').on('click',function(e){
        $('#testspan').trigger('click');
    });
});