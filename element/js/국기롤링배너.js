$(document).ready(function(){
    //배열에 국기이미지 저장
    var imgList=['canada.png','england.png','germany.png','italia.png','korea.png','spain.png','usa.png'];
    var index=0;//배열인덱스 변수
    var $banner=$('.banner');//이미지 표식을 위한 요소

    setInterval(function(){
        index++;

        if(index>=imgList.length){
            index=0;//처음부터 다시 롤링
        }
        var imgName=imgList[index];
        //banner의 속성값 소스를 변경해줌
        $banner.attr('src','resource/'+imgName);
        
    },1000);
});