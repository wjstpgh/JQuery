//객체지향
$(function( ){
    var tab1=new TabMenu(tabMenu1);
    var tab2=new TabMenu(tabMenu2);

    $('#btnReset').click(function(){
        tab1.resetTabMenu();
        tab2.resetTabMenu();
    });
});
//탭메뉴 클래스 정의
function TabMenu(selector){
    this.init(selector);
    this.initEvent();
}
TabMenu.prototype.init=function(selector){
    this.tabMenu=$(selector);
    this.$menuItems=this.tabMenu.find('li');
}
//이벤트초기화
TabMenu.prototype.initEvent=function(){
    var localThis=this;
    this.$menuItems.on('click',function(){
        //선택된 아이템의 인덱스를 가지고 메소드 호출
        localThis.setSelectMenuItemAt($(this).index());
    });
}
//n번째 탭메뉴 선택
TabMenu.prototype.setSelectMenuItemAt=function(index){
    this.$menuItems.removeClass('select');
    this.$menuItems.eq(index).addClass('select');
}
//탭메뉴 초기화
TabMenu.prototype.resetTabMenu=function(){
    this.$menuItems.removeClass('select');
}