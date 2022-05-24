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
    });
});