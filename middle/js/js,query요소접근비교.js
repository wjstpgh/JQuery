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
});