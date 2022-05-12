$(document).ready(function(){
    var $menu=$('#menu');
    var menuData='메뉴2,메뉴3,메뉴4,메뉴5';
    //String의 split은 구분자를 기준으로 문자를 나눠서 배열로 리턴
    var menuItems=menuData.split(',');
    //반복문을 이용해 메뉴 추가
    for(var i=0;i<menuItems.length;i++){
        var newItem='<li>'+menuItems[i]+'</li>';
        //메뉴 아이템 동적추가
        $menu.append(newItem);
    }
});