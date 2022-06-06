$(document).ready(function(){
    var $child=$('#child');
    //기본크기자체를 변경
    $('#btn1').click(function(e){
        $child.width(200);
        $child.height(200);
    });
    //padding을 포함해서 크기를 조절
    $('#btn2').click(function(e){
        $child.innerWidth(200);
        $child.innerHeight(200);
    })
});