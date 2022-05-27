//js로 스타일 접근
window.onload=function(){
    var content=document.getElementById('test');
    //인라인 속성은 접근이 가능
    console.log('color : ', content.style.color);
    //외부 속성은 접근 불가능
    console.log('border : ', content.style.border);
    console.log('margin : ', content.style.margin);
    console.log('fontsize : ', content.style.fontSize);
    //getComputedStyle은 내부, 외부 스타일 모두 접근 가능
    console.log('border : ', window.getComputedStyle(content).border);
    //js에서는 속성 이름에 카멜-표기법을 사용한다.
    content.style.fontSize='12px';
    //js에서는 단위 생략 불가
    content.style.fontSize='12';
    //js에서는 스타일을 하나씩 변경해야한다.
    content.style.border='5px solid black';
    content.style.margin='50px';
}
//jQuery로 스타일 접근
$(function( ){
    var $content=$('#test');
    //jQuery는 내부,외부 스타일에 대한 제한이 없음
    console.log('color : ', $content.css('color'));
    console.log('border : ', $content.css('border'));
    console.log('margin : ', $content.css('margin'));
    console.log('fontsize : ', $content.css('font-size'));
    //jQuery는 두 가지 표기 모두 사용가능
    $content.css('fontSize','12px');
    $content.css('font-size','13px');
    //jQuery에서는 단위가 생략 가능(기본단위인 px이 적용)
    $content.css('font-size',8);
    //li태그의 단일 속성 폰트사이즈
    console.log('font-size : ',$('.menu li').css('font-size'));
    //menu아이템의 다중 속성 알아내기
    var menu=$('.menu').css(['width','height','margin','color']);
    console.log('width : '+menu.width+' height : '+menu.height+' margin : '+menu.margin+' color : '+menu.color);
    //jQuery에서는 속성을 한번에 변경
    $content.css({
        fontSize:'8px',
        border:'5px solid black',
        margin:'50px'
    });
    //클릭마다 fontsize1씩 증가
    var $item=$('.menu li.select');
    $('#exec').click(function(){
        var fontSize=parseInt($item.css('fontSize'));
        console.log(fontSize);
        $item.css('fontSize',fontSize+1);
    });
    var $item=$('.menu li.select');

    $('#exec').click(function(){
        //기본 글자크기
        var size=16;
        //each로 li갯수만큼 루프
        $('.menu li').each(function(i){
            $(this).css({
                fontSize:size
            });
            //폰트사이즈가 10씩 증가
            size+=10;
        });
        //너비 높이 스타일값설정
        $item.css({
            width:100,
            height:100,
            'background-color':'blue',
            'color':'white'
        });
    });
    $('.menu li').click(function(){
        $(this).addClass('select');
        $(this).addClass('select border');
        var $item=$(this);
        //select 토글 클래스
        if($item.hasClass('select')==false){
            $item.addClass('select');
        }
        else{
            $item.removeClass('select');
        }
        //토글 클래스는 스위치, 플래그 같은 것
        $(this).toggleClass('select border');
    });
    $('#remove').click(function(){
        $('.menu li').each(function(){
            //li태그들을 루핑하며 모든 클래스 제거
            $(this).removeClass();
        });
    });
});