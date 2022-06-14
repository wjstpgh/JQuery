$(function( ){
    tabMenu1.init();
    tabMenu1.initEvent();
    tabMenu2.init();
    tabMenu2.initEvent();
});
//리터럴 클래스 정의
var tabMenu1={
    $tabMenu:null,
    $menuItems:null,
    $selectMenuItem:null,
    //요소 값 지정 
    init:function(){
        this.$tabMenu=$('#tabMenu1');
        this.$menuItems=this.$tabMenu.find('li');
    },
    //이벤트 등록
    initEvent:function(){
        var objThis=this;
        this.$menuItems.on('click',function(){
            objThis.setSelectItem($(this));
        });
    },
    //$menuItem에 해당하는 메뉴아이템 선택
    setSelectItem:function($menuItem){
        //기존 선택한 메뉴 삭제
        if(this.$selectMenuItem){
            this.$selectMenuItem.removeClass('select');
        }
        //클릭한 곳에 클래스 생성
        this.$selectMenuItem=$menuItem;
        this.$selectMenuItem.addClass('select');
    }
}
var tabMenu2={
    $tabMenu:null,
    $menuItems:null,
    $selectMenuItem:null,
    //요소 값 지정 
    init:function(){
        this.$tabMenu=$('#tabMenu2');
        this.$menuItems=this.$tabMenu.find('li');
    },
    //이벤트 등록
    initEvent:function(){
        var objThis=this;
        this.$menuItems.on('click',function(){
            objThis.setSelectItem($(this));
        });
    },
    //$menuItem에 해당하는 메뉴아이템 선택
    setSelectItem:function($menuItem){
        //기존 선택한 메뉴 삭제
        if(this.$selectMenuItem){
            this.$selectMenuItem.removeClass('select');
        }
        //클릭한 곳에 클래스 생성
        this.$selectMenuItem=$menuItem;
        this.$selectMenuItem.addClass('select');
    }
}