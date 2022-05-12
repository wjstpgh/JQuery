$(document).ready(function(){
    var $arrBanner=$('.arrBanner');
    var i=0;
    var imgList=['canada.png','england.png','germany.png','italia.png','korea.png','spain.png','usa.png'];

    setInterval(function(){
        i++;//다음 인덱스 
        if(i>=imgList.length){
            i=0;//인덱스 범위가 같아지면 초기화
        }
        var imgName=imgList[i];//배열에서 이미지 이름 얻음
        //배너의 속성 변경해주기
        $arrBanner.attr('src','resource/'+imgName);
    },1000);
});