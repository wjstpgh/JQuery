//절차지향
var $tab1MenuItems=null;
var $tab2MenuItems=null;
$(function( ){
    $tab1MenuItems=$('#tabMenu1 li');
    $tab2MenuItems=$('#tabMenu2 li');

    tabMenu($tab1MenuItems);
    tabMenu($tab2MenuItems);
    //초기화이벤트
    $('#btnReset').click(function(){
        resetTabMenu($tab1MenuItems);
        resetTabMenu($tab2MenuItems);
    });
});
//탭메뉴생성
function tabMenu($menuItems){
    $menuItems.click(function(){
        selectMenuItemAt($menuItems, $(this).index());
    });
}
//n번째 탭메뉴 선택
function selectMenuItemAt($menuItems,index){
    $menuItems.removeClass('select');
    $menuItems.eq(index).addClass('select');
}
//탭메뉴선택 초기화
function resetTabMenu($menuItems){
    $menuItems.removeClass('select');
}