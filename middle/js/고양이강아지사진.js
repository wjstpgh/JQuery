$(function( ){
    //이미지 목록 구하기
    var $targetList=$('.target');

    $targetList.click(function(){
        //클릭된 이미지 받아주기
        var $target=$(this);
        //이미지의 dataflag의 boolen값을 반대로 변경
        var flag=!$target.data('flag');
        $target.data('flag',flag);
        //클릭에 따라 변경된 flag변수에 따라 src속성 변경
        if(flag){
            $target.attr('src','resource/cat.png');
        }
        else{
            $target.attr('src','resource/dog.png');
        }
    });
});