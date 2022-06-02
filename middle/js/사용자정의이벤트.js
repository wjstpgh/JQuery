$(function( ){
    var $output=$('#output');
    var $menu=$('.menu');
    var cnt=5;

    $('#add').click(function(e){
        cnt++;
        //신규 메뉴항목
        var $newItem=$('<li>메뉴'+cnt+'</li>');
        $menu.append($newItem);

        //사용자 정의 이벤트 객체 생성
        var event=jQuery.Event('addItem');
        //이벤트 데이터 포장
        event.item=$newItem;//메뉴항목 저장
        event.itemName=$newItem.text();//메뉴 항목 이름 저장
        event.itemLength=$menu.children().length;//메뉴 항목 길이저장
        //강제 이벤트 발생
        $menu.trigger(event);

        //이벤트 발생시 리스너로 넘길 데이터 생성
        var data=[$newItem, $newItem.text(), $menu.children().length];
        //$menu.trigger(event,data);
    });
    //addItem 이벤트 리스너 등록
    $menu.on('addItem',function(e){
        $output.prepend('<p>추가 아이템 : '+e.itemName+', 아이템 갯수 : '+e.itemLength+'</p>');
    });
    $menu.on('addItem',function(e,$item,itemName,itemLength){
        //$output.prepend('<p>추가 아이템 : '+itemName+', 아이템 갯수 : '+itemLength+'</p>');
    });
});