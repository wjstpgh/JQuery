$(function( ){
    var tab1=new TabMenu('#tabMenu1');
    tab1.setSelectItemAt(1);

    var tab2=new TabMenu(tabMenu2);
    tab2.setSelectItemAt(2);
});
//캡슐화
function TabMenu(selector){
    //은닉화를 위한 프로퍼티 선언
    this._$tabMenu=null;
    this._$menuItems=null;
    this._$selectMenuItme=null;

    //요소초기화, 이벤트 등록 메서드 호출
    this._init(selector);
    this._initEvent();
}
//요소초기화 메서드
TabMenu.prototype._init=function(selector){
    this._$tabMenu=$(selector);
    this._$menuItems=this._$tabMenu.find('li');
}
//이벤트 등록 메서드
TabMenu.prototype._initEvent=function(){
    var objThis=this;
    this._$menuItems.on('click',function(){
        objThis.setSelectItem($(this));
    });
}
//$menuItems에 해당하는 메뉴 아이템 선택
TabMenu.prototype.setSelectItem=function($menuItem){
    if(this._$selectMenuItme){
        this._$selectMenuItme.removeClass('select');
    }
    this._$selectMenuItme=$menuItem;
    this._$selectMenuItme.addClass('select');
}
//인덱스에 해당하는 메뉴 아이템 선택
TabMenu.prototype.setSelectItemAt=function(index){
    var $menuItem=this._$menuItems.eq(index);
    this.setSelectItem($menuItem);
}