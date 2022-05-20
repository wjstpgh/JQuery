//js로 아이디가 header인 노드를 찾아 변경하기
window.onload=function(){
    var header=document.getElementById('header');
    header.style.border='5px solid #f00';
    //js로 p태그를 찾아 변경
    var pArr=document.getElementsByTagName('p');
    for(var i=0;i<pArr.length;i++){
        pArr[i].style.border='3px solid #414';
    }
    //div자식 p노드중 클래스test2를 찾아변경
    var pTest=document.getElementsByClassName('test2');
    for(var i=0;i<pTest.length;i++){
        //pTest[i].style.border='3px solid #032';
        var varP=pTest[i];
        //만약 p의 자식노드라면
        if(varP.tagName=='P'){
            //p의 자식요소의 부모요소가 div라면
            if(varP.parentNode.tagName=='DIV'){
                varP.style.border='3px solid #032';
            }
        }
    }
}
//jQuery로 header인 노드찾아 변경하기
$(document).ready(function(){
    $('#header').css('border','5px solid #f99');
    //jQuery로 p태그찾아변경
    $('p').css('border','3px solid #586');
    //jQuery로 div>p.test2태그변경
    $('div p.test2').css('border','3px solid #663');
    //아이디선택자를 이용해 노드찾기
    $('#footer').css('border','3px solid #356');
    //변수에 할당하는 방법
    var $footer=$('#footer');
    $footer.css('color','red');
    //태그이름으로 노드찾기
    var $p=$('p');
    $p.css('color','#119');
    //클래스이름으로 노드찾기
    var $menu=$('.menu');
    $menu.css('border','3px solid #ccc');
    //ul태그의 자식요소 클래스선택자
    var $test1=$('ul.menu li.test1');
    var $select=$('ul.menu li.select');
    $test1.css('background-color','#512');
    $select.css('background-color','aqua');
    //클래스속성 태그선택
    $('[class^=m]').css('background-color','#c99');
    //아이디속성 태그선택
    $('[id$=a]').css('background-color','#000');
    //$('ul.menu li').each(function(index){
            //this는 현재 jQuery의 객체를 가르킴
        //    document.write(this+'</br>');
        //   console.log(this);
    //});
});