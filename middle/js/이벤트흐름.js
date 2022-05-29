//리스너의 실행횟수 카운트
var cnt=0;
//이벤트는 캡처 > 타겟 > 버블 세 단계의 흐름으로 이뤄짐
//캡처 단계 : 사전작업과 이벤트 흐름제어
$(function( ){
    //캡처링 단계의 첫번째 document에 이벤트 등록
    document.addEventListener('click',function(e){
        cnt++;
        console.log('1.document phase : '+e.eventPhase+' cnt : '+cnt);
    },true);
    //캡처링 단계의 두번째 body에 이벤트 등록
    document.body.addEventListener('click',function(e){
        cnt++;
        console.log('2.body phase : '+e.eventPhase+' cnt : '+cnt);
    },true);
    //캡처링 단계의 세번째 a1에 이벤트 등록
    $('#a1').get(0).addEventListener('click',function(e){
        cnt++;
        console.log('3.a1 phase : '+e.eventPhase+' cnt : '+cnt);
        //이벤트를 끊어줌
        e.stopPropagation();
    },true);
    //캡처링 단계의 네번째 b1에 이벤트 등록
    $('#b1').get(0).addEventListener('click',function(e){
        cnt++;
        console.log('4.b1 phase : '+e.eventPhase+' cnt : '+cnt);
    },true);
    //document 버블링 단계에 이벤트 등록
    $(document).on('click',function(e){
        cnt++;
        console.log('8.document phase : '+e.eventPhase+' cnt : '+cnt);
    });
    //body 버블링 단계에 이벤트 등록
    $('body').on('click',function(e){
        cnt++;
        console.log('7.body phase : '+e.eventPhase+' cnt : '+cnt);
    });
    //a1 버블링 단계에 이벤트 등록
    $('#a1').on('click',function(e){
        cnt++;
        console.log('6.a1 phase : '+e.eventPhase+' cnt : '+cnt);
    });
    //b1 버블링 단계에 이벤트 등록
    $('#b1').on('click',function(e){
        cnt++;
        console.log('5.b1 phase : '+e.eventPhase+' cnt : '+cnt);
    });
});