$(function( ){
    var tab1=new TabMenu('#tabMenu1');
    tab1.setSelectItemAt(1);

    var tab2=new TabMenu('#tabMenu2');
    tab2.setSelectItemAt(2);
});
//클래스 설계
function TabMenu(selector){
    //멤버변수 초기화
    this.$tabMenu=null;
    this.$menuItems=null;
    this.$selectedMenuItem=null;
    //요소 초기화 및 이벤트 등록
    this.init(selector);
    this.initEvent();
}
//초기화 멤버함수
TabMenu.prototype.init=function(selector){
    this.$tabMenu=$(selector);
    this.$menuItems=this.$tabMenu.find('li');
}
//이벤트 등록 멤버함수
TabMenu.prototype.initEvent=function(){
    var objThis=this;
    this.$menuItems.on('click',function(){
        objThis.setSelectItem($(this));
    });
}
//menuItems에서 사용자가 클릭한 메뉴 아이템을 선택
TabMenu.prototype.setSelectItem=function($menuItem){
    if(this.$selectedMenuItem){
        this.$selectedMenuItem.removeClass('select');
    }
    this.$selectedMenuItem=$menuItem;
    this.$selectedMenuItem.addClass('select');
}
//index에 해당하는 메뉴 선택
TabMenu.prototype.setSelectItemAt=function(index){
    var $menuItem=this.$menuItems.eq(index);
    this.setSelectItem($menuItem);
}