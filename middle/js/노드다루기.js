$(function( ){
    var cnt=6;
    $('#btnAdd').click(function(){
        //신규노드생성
        var li=document.createElement('li');
        var liText=document.createTextNode('메뉴'+cnt);
        var menu=document.getElementById('menu');
        //text노드를 li에 추가
        li.appendChild(liText);
        //menu선택자에 li노드 추가
        menu.appendChild(li);
        //li객체 출력                
        console.log(li);

        //prepend()는 처음 자식노드 추가
        $('#menu').prepend('<li>메뉴'+cnt+'</li>');
        //신규노드를 직접 생성1
        var $li=$('<li>메뉴'+cnt+'</li>');
        $('#menu').prepend($li);
        //신규노드 직접생성2
        $li.prependTo('#menu');
        var $li=$('<li>메뉴'+cnt+'</li>');                
        //신규노드 직접생성3
        $li.insertBefore('#menu li:first');
        //li객체 출력
        console.log($li.get(0));
        //element를 출력
        document.write($li.get(0));
        //jQeury객체 생성
        $item=$('<li>메뉴'+cnt+'</li>');
        //선택된 태그 앞에 추가
        $item.insertBefore('#menu li.select');
        $('#menu li.select').before($item);
        //선택된 태그 뒤에 추가
        $item.insertAfter('#menu li.select');
        $('#menu li.select').after($item);

        //자식노드의 마지막에 추가
        $('#menu').append($item);
        $item.appendTo('#menu');
        //노드 한번에 추가하기
        for(var i=1;i<=10;i++){
            //추가할 노드 i개만큼 적용
            $('#menu').append('<li>메뉴'+i+'</li>');
        }
        var data='';
        for(var i=1;i<=10;i++){
            //추가할 노드 i개만큼 생성
            data+='<li>메뉴'+i+'</li>';
        }
        //생성한 노드를 적용
        $('#menu').html(data);
    });

    var $menu=$('#menu');
    $('#menu li').click(function(){
        //클릭된 li태그를 마지막 위치에 추가
        $menu.append(this);
        //select클래스를 선택했다면 종료
        if($(this).hasClass('select')==true){
            return;
        }
        //select클래스가 아닌 li를 클릭했다면 해당 노드를 이동
        else{
            //select노드 이전으로 이동
            $(this).insertBefore($('.select'));
            //select노드 이후로 이동
            $(this).insertAfter($('.select'));
        }
    });
    $('#menu li').click(function(){ 
        //클릭한 노드 삭제하기
        $(this).remove();

        var $item=$(this);
        //html()으로 li를 클릭하면 a태그로 변경
        $item.html('<a href="https://www.naver.com">새메뉴 '+(1+$item.index()));
        //text()를 이용해 li를 클릭하면 텍스트내용 변경
        $item.text('문자수정');
    });
    $('#btnrm').click(function(){
        //모든 자식노드 삭제
        $('#menu').children().remove();
        //모든 자식중 짝수번째 인덱스 노드만 삭제
        $('#menu li:even').remove();
        //모든 자식 중 홀수번째 인덱스 노드만 삭제
        $('#menu li:odd').remove();
        //html은 한번만 호출하여 모든 노드 삭제
        $('#menu').html('');
        //li태그 수만큼 메소드 호출
        $('#menu li').remove();
    });

    $('#btnchk').click(function(){
        //html은 특정 노드의 마크업까지 확인
        //리턴값은 DOM객체가 아닌 문자열
        console.log($('#menu').html());
        //text는 텍스트 노드의 내용만 리턴
        console.log($('#menu').text());
    });
});