$(document).ready(function(){
    tabMenu('#tabmenu1 li');//탭메뉴 코드 함수 호출
});

function tabMenu(seletor){
    var $selectedMenuItem=null;//지역변수
    
    $(seletor).click(function(){
        if($selectedMenuItem!=null){
            $selectedMenuItem.removeClass('select');
        }
        $selectedMenuItem=$(this);
        $selectedMenuItem.addClass('select');
        $('#info').html($selectedMenuItem.index());
    });
    
}