$(function( ){
    //인스턴스 생성 및 이벤트 등록처리
    var gallery=new SimpleAniGallery();
    gallery.init('#container1 img');

    $('#btnStart').click(function(){
        //이미지 정렬
        gallery.showAni(3,150,150);
    })
});
//부모클래스
function SimpleGallery(){
    this.$images=null;
}
//요소 초기화 메서드
SimpleGallery.prototype.init=function(selector){
    this.$images=$(selector);
}
//이미지 출력
SimpleGallery.prototype.show=function(count,imgwidth,imgheight){
    var length=this.$images.length;
    for(var i=0;i<length;i++){
        //n번째 이미지 구하기
        var $img=this.$images.eq(i);
        //이미지 위치
        var x=100+((i%count)*imgwidth);
        var y=100+((parseInt(i/count))*imgheight);
        //이미지 위치 설정
        $img.css({
            left:x,
            top:y
        });
    }
}
//자식 클래스
function SimpleAniGallery(){

}
//상속
SimpleAniGallery.prototype=new SimpleGallery();
//이미지 출력 메서드(자식 고유메서드)
SimpleAniGallery.prototype.showAni=function(count,imgwidth,imgheight){
    var length=this.$images.length;
    for(var i=0;i<length;i++){
        //n번째 이미지
        var $img=this.$images.eq(i);
        //위치값 구하기
        var x=100+((i%count)*imgwidth);
        var y=100+((parseInt(i/count))*imgheight);
        $img.animate({
            left:x,
            top:y
        },1500);
    }
}