//전역변수 선언 및 초기화
var $menu=null;
var $menuName=null;
var $selectedItem=null;
//문서가 시작되면 초기화 함수 및 이벤트 등록 메소드 호출
$(function( ){
    init();
    initEvent();
});

//전역에서 사용할 jQuery변수 초기화
function init(){
    $menu=$('ul.menu');
    $menuName=$('#menuName');
}

//이벤트 초기화
function initEvent(){
    //메뉴 추가
    $('#add').click(function(){
        addMenu();
    });
    //li가 클릭됬을때 선택되는 이벤트
    $menu.on('click','li',function(){
        selectItem($(this));
    });
    //메뉴 수정
    $('#update').click(function(){
        updateMenuItem();
    });
    //메뉴 삭제
    $('#remove').click(function(){
        removeMenuItem();
    });
    //메뉴 올리기
    $('#up').click(function(){
        upMenuItem();
    });
    //메뉴 내리기
    $('#down').click(function(){
        downMenuItem();
    });
}
//메뉴 추가 함수
function addMenu(){
    //사용자 입력 텍스트 가져오기
    var menuName=$menuName.val();
    //추가할 신규 메뉴의 문자열
    var newMenuItem='<li>'+menuName+'</li>';

    //추가된 아이템이 있다면 아래로 추가
    if($selectedItem){
        $selectedItem.after(newMenuItem);
    }
    else{//신규 아이템 추가
        $menu.append(newMenuItem);
    }
}
//메뉴 선택 이벤트
function selectItem($item){
    //초기 선택일때 선택이벤트 활성            
    if($selectedItem==null){                
        $selectedItem=$item;
        $selectedItem.addClass('select');                
    }   
    //이미 li태그가 있고 새로운 li 태그를 클릭했을 때
    else if($item.hasClass('select')==false){
        $selectedItem.removeClass('select');
        $selectedItem=$item;
        $selectedItem.addClass('select');
    }
    //이미 고른 li태그를 클릭했을 때 선택 이벤트 비활성
    else if($item.hasClass('select')==true){
        $item.removeClass('select');
    }         
}
//메뉴 수정 이벤트
function updateMenuItem(){
    if($selectedItem){
        var menuName=$menuName.val();
        $selectedItem.html(menuName);
    }
    else{
        alert('수정할 메뉴를 먼저 선택하세요');
    }
}
//메뉴 삭제 이벤트
function removeMenuItem(){
    if($selectedItem){
        $selectedItem.remove();
        $selectedItem=null;
    }
    else{
        ('삭제할 메뉴를 먼저 선택하세요');
    }
}
//메뉴 올리기 이벤트
function upMenuItem(){
    if($selectedItem){
        //이전 메뉴 아이템이 있다면 그 앞으로 이동
        var $prevItem=$selectedItem.prev();
        if($prevItem){
            $selectedItem.insertBefore($prevItem);
        }
        //이전 메뉴가 없다면
        else{
            alert('제일 위 입니다.');
        }
    }
    else{
        alert('선택된 메뉴가 없습니다.');
    }
}
//메뉴 내리기 이벤트
function downMenuItem(){
    if($selectedItem){
        //이후 메뉴 아이템이 있다면 그 뒤로 이동
        var $nextItem=$selectedItem.next();
        if($nextItem){
            $selectedItem.insertAfter($nextItem);
        }
        //이후 메뉴가 없다면
        else{
            alert('제일 아래 입니다.');
        }
    }
    else{
        alert('선택된 메뉴가 없습니다.');
    }
}