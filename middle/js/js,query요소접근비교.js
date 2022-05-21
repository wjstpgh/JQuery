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
    var $content=$('#content');
    //filter()는 특정노드를 찾는데 자식요소에서만
    //find()는 자손의 특정 요소를 찾음
    $content.find('.test1').css('background','yellow');

    $('ul.menu li').click(function(){
        //클릭한 객체의 인덱스값을 출력
        alert($(this).index());
    });
    //특정 노드의 모든 자식 태그를 찾아줌
    $('#samplePage').children().css('border','2px solid blue');
    console.log($('#samplePage').children().length);//3
    //특정 노드의 모든 자식 태그에 텍스트노드까지 찾아줌
    $('#samplePage').contents().css('border','2px solid aqua');
    console.log($('#samplePage').contents().length);//7

    //특정 노드의 모든 자식 태그 중 header를 찾아줌
    $('#samplePage').children('#header').css('border','2px solid brown');
    console.log($('#samplePage').children('#header').length);
    //특정 노드의 모든 자식 태그와 텍스트노드 중 content를 찾아줌
    $('#samplePage').contents('#content').css('border','2px solid gray');
    console.log($('#samplePage').contents('#content').length);

    var $menu=$('ul.menu');
    //childern을 이용해 선택자 :first를 이용해 첫번째 자식을 구함
    $menu.children(':first').css('background','red');
    //children을 통해 나온 jQuery객체에 first()를 이용해 첫번째 자식을 구함
    $menu.children().first().css('background','red');
});