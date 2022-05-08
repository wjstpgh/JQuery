$(document).ready(function(){
    tabMenu('#tabmenu1',onSelectItem);//탭메뉴 코드 함수 호출
});

function tabMenu(seletor,callback){
    var $tabMenu=null;
    var $menuItems=null;
    var $selectedMenuItem=null;//선택 탭메뉴 저장변수
    //요소 초기화
    function init(selector){
        $tabMenu=$(selector);
        //6개의 웹요소인 li태그를 배열로 받음
        $menuItems=$tabMenu.find('li');
    }
    //이벤트 초기화 및 등록
    function initEvent(){
        $menuItems.click(function(){
            //선택된 li태그를 매개변수로 지정하는 this
            setSelectItem($(this));
        });
    }
    //선택된 메뉴 아이템 생성
    function setSelectItem($item){
        //선택된 메뉴가 있다면
        if($selectedMenuItem != null){
            //선택된 메뉴를 제거
            $selectedMenuItem.removeClass('select');
        }
        //매개변수인 선택된 아이템 대입
        $selectedMenuItem=$item;
        //선택된 메뉴를 select에 추가
        $selectedMenuItem.addClass('select');
        //선택콜백함수를 실행하도록 함
        if(callback!=null){
            callback($selectedMenuItem.index());
        }
    }
    init(seletor);
    initEvent();
}
//로직처리부(선택처리)
function onSelectItem(index){
    $('#info').html(index);
}