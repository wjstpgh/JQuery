//jQuery방법1
jQuery(document).ready(function(){
    var $h1=$('h1');
    $h1.css('color','red');
    alert('방법1');
});
//방법2
jQuery(function(){
    var $image=$('#image');
    console.log('이미지너비'+$image.width());
    alert('방법2');
});
//방법3
$(document).ready(function(){
    alert('방법3');
});
//방법4
$(function(){
    alert('방법4');
});
//모든 컨텐츠가 다 로딩된 후에 발생하는 이벤트
window.onload=function(){
    console.log('이미지너비'+$image.width());
}