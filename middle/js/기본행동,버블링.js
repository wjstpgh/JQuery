$(function( ){
    //이벤트를 한번만 실행하고 제거
    $('#btn').one('click',function(e){
        alert('one은 한번만 실행');
    });
    //기본행동은 특정태그의 디폴트이벤트
    $('#test').on('click',function(e){
        alert('test click');
        //cancelable은 기본행동이 있을 때 true를 반환
        console.log(e.cancelable);
        //기본 행동 취소
        e.preventDefault();
    });
    //panel에 클릭 이벤트 등록
    $('#panel').click(function(e){
        console.log('panel 클릭');
        //bubbles의 프로퍼티 값이 true이면 버블링이 발생한다는 것
        console.log('panel bubbles : '+e.bubbles);
    });
    //btn1에 클릭 이벤트 등록
    $('#btn1').click(function(e){
        console.log('btn1 버블링 처리');
        console.log('btn1 bubbles : '+e.bubbles);
    });
    //btn2에 클릭 이벤트 등록
    $('#btn2').click(function(e){
        console.log('btn2 버블링 중지');
        console.log('btn2 bubbles : '+e.bubbles);
        //버블링 중지 메소드 호출
        e.stopPropagation();
    });
});