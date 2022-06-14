$(function( ){
    var tabMenu_1=new TabMenu();
    tabMenu_1.init(tabMenu1);
    tabMenu_1.initEvent();

    var tabMenu_2=new TabMenu();
    tabMenu_2.init(tabMenu2);
    tabMenu_2.initEvent();
});
//클래스 설계
function TabMenu(){
    //멤버변수 초기화
    this.$tabMenu=null;
    this.$menuItems=null;
    this.$selectedMenuItem=null;

    //초기화 멤버함수
    this.init=function(selector){
        this.$tabMenu=$(selector);
        this.$menuItems=this.$tabMenu.find('li');
    }
    //이벤트 등록 멤버함수
    this.initEvent=function(){
        var objThis=this;
        this.$menuItems.on('click',function(){
            objThis.setSelectItem($(this));
        });
    }
    //menuItems에서 사용자가 클릭한 메뉴 아이템을 선택
    this.setSelectItem=function($menuItem){
        if(this.$selectedMenuItem){
            this.$selectedMenuItem.removeClass('select');
        }
        this.$selectedMenuItem=$menuItem;
        this.$selectedMenuItem.addClass('select');
    }
}