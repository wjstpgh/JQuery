var count=0;
var $info=null;
var $child=null;
$(function( ){
    $info=$('#info');
    $child=$('#child');
    //mouseover, out 이벤트는 부모와 자식을 독립적으로 판단
    //mouseenter, leave 이벤트는 자식을 부모의 일부로 판단
    $('#parent').mouseover(function(e){
        count++;
        $info.html($info.html()+'<br/>'+count+'. '+e.target.id+' over');
        $child.animate({
            top:-100
        },300);
    });
    $('#parent').mouseout(function(e){
        count++;
        $info.html($info.html()+'<br/>'+count+'. '+e.target.id+' out');
        $child.animate({
            top:0
        },300);
    });
    $('#parent').mouseenter(function(e){
        count++;
        $info.html($info.html()+'<br/>'+count+'. '+e.target.id+' enter');
        $child.animate({
            top:-100
        },300);
    });
    $('#parent').mouseleave(function(e){
        count++;
        $info.html($info.html()+'<br/>'+count+'. '+e.target.id+' leave');
        $child.animate({
            top:0
        },300);
    });
});