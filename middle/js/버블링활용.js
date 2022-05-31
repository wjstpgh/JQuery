$(function( ){
    //li태그 5개에 클릭이벤트
    //모든 li객체에 이벤트가 등록되있어 효율이 떨어짐
    $('.menu li').on('click',function(e){
        alert($(this).html());
    });
    //ul태그에만 selector를 이용해 이벤트 등록
    $('.menu').on('click','li',function(e){
        //이벤트가 실행된 태그를 출력
        console.log(e.target.tagName);
        alert($(this).html());
    });

    var $menu=$('.menu');
    var cnt=5;

    $('#add').click(function(e){
        cnt++;
        //동적 메뉴추가
        $menu.append('<li>메뉴'+cnt+'</li>');
    });
    //메뉴항목에 클릭 이벤트 등록
    $('.menu li').click(function(e){
        //새로 등록되는 태그엔 이벤트가 들어가지 않음
        alert($(this).html());
    }); 

    //추가된 태그에 이벤트 등록1
    $('#add').click(function(e){
        cnt++;
        var $newItem=$('<li>메뉴'+cnt+'</li>');
        //신규메뉴가 추가될때마다 이벤트도 생성
        $newItem.on('click',function(e){
            alert($(this).html());
        });
        //메뉴추가
        $menu.append($newItem);
    });
    
    //추가된 태그에 이벤트 등록2
    $('.menu').on('click','li',function(e){
        //새로 등록되는 태그에도 이벤트가 들어감
        alert($(this).html());
    });
});