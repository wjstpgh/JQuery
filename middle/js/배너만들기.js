$(function( ){
    //banner-container 가져오기
    var $banner=$('.banner-container');
    //배너 이미지 개수 구하기
    var bannerLength=$banner.find('img').length;
    //배너 하나의 너비 구하기
    var bannerWidth=$('.banner').width();
    //배너의 index값 저장
    var currentIndex=0;

    $('#prev').click(function(e){
        //인덱스 값 구하기
        currentIndex--;
        if(currentIndex<0){
            currentIndex=bannerLength-1;
        }
        //currentIndex에 해당하는 이미지 출력
        showImage(currentIndex);
    });

    $('#next').click(function(e){
        //인덱스 값 구하기
        currentIndex++;
        if(currentIndex>=bannerLength){
            currentIndex=0;
        }
        //currentIndex에 해당하는 이미지 출력
        showImage(currentIndex);
    });

    function showImage(index){
        //빼준만큼 이동해야 다음 사진 보일수있음
        var left=-(index*bannerWidth);
        //배너 위치 설정
        $banner.css('left',left);
    }
});