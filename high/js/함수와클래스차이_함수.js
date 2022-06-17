$(function( ){
    var tab1=tabMenu('#tabMenu1');
    tab1.setSelectItemAt(1);
    var tab2=tabMenu('#tabMenu2');
    tab2.setSelectItemAt(2);
});
//함수 설계
function tabMenu(selector){
    var $tabMenu=null;
    var $menuItems=null;
    var $selectedMenuItem=null;
    //중첩함수
    function init(selector){
        $tabMenu=$(selector);
        $menuItem=$tabMenu.find('li');
    }
    //이벤트 등록 함수
    function initEvent(){
        $menuItem.on('click',function(){
            setSelectItem($(this));
        });
    }
    //menuItems에서 사용자가 클릭한 메뉴 아이템을 선택
    function setSelectItem($menuItem){
        if($selectedMenuItem){
            $selectedMenuItem.removeClass('select');
        }
        $selectedMenuItem=$menuItem;
        $selectedMenuItem.addClass('select');
    }
    //index에 해당하는 메뉴 선택
    function setSelectItemAt(index){
        setSelectItem($menuItem.eq(index));
    }
    //초기화 함수 호출
    init(selector);
    initEvent();

    //중첩함수에 접근하기 위해 기능 리턴
    return {
        'setSelectItemAt':setSelectItemAt
    }
}