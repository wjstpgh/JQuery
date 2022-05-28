$(function( ){
    var $image=$('#image');
    var flag=true;

    $image.click(function(){
        flag=!flag;
        //attr()로 속성값 변경
        if(flag){
            $image.attr('src','resource/cat.png');
        }
        else{
            $image.attr('src','resource/dog.png');
        }
    })
});