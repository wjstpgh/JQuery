$(function( ){
    //버튼에 일반 이벤트 등록
    $('#btn').on('click',function(e){
        alert('일반 이벤트');
    });
    //버튼에 단축 이벤트 등록, 내부적으로는 on()형태로 실행됨
    $('#btn').click(function(){
        alert('단축 이벤트');
    });
    //이벤트 다중등록1
    $('p').on('mouseenter mouseleave',function(e){
        $('div').append('마우스지나감')
    });
    //이벤트 다중등록2
    $('p').on({
        click:function(){
            console.log('p태그 클릭');
        },
        mouseenter:function(){
            console.log('p태그 마우스온');
        },
        mouseleave:function(){
            console.log('p태그 마우스아웃');
        }
    });
    //단축이벤트
    $('div').mouseenter(function(){
        console.log('div 마우스 온');
    });
    $('div').mouseleave(function(){
        console.log('div 마우스 아웃');
    });
    $('div').click(function(){
        console.log('div 클릭');
    });
    //이벤트 제거
    $('#remove').click(function(){
        //등록된 이벤트 전부 제거
        $('p').off();
        $('div').off('mouseenter');
    })
});