$(document).ready(function(){
    //모든 이미지 가져오기
    var img1=new SimpleGallery('#container1 img');
    //버튼에 클릭이벤트 등록
    $('#btnHorizontal').click(function(){
        img1.show(horizontalAlignable);
    });
    $('#btnVertical').click(function(){
        img1.show(verticalAlignable);
    });
    $('#btnRandom').click(function(){
        img1.show(randomAlignable);
    });
    $('#btnGrid').click(function(){
        img1.show(GridAlignable);
    });
});
//심플갤러리 클래스
function SimpleGallery(selector){
    this.$images=null;
    this.init(selector);
}
//요소초기화
SimpleGallery.prototype.init=function(selector){
    this.$images=$(selector);
}
//인터페이스 선언부 구현
SimpleGallery.prototype.show=function(alignable){
    alignable.align(this.$images);//추상메서드 선언
}
//가로정렬(리터럴방식)
var horizontalAlignable={
    align:function($images){
        //이미지 개수구하기
        var length=$images.length;
        //이미지 가로정렬
        for(var i=0;i<length;i++){
            var x=i*200;
            $images.eq(i).css({
                left:x,
                top:0
            });
        }   
    }
    
}
//세로정렬
var verticalAlignable={
    align:function($images){
        //이미지 개수구하기
        var length=$images.length;
        //이미지 가로정렬
        for(var i=0;i<length;i++){
            var y=i*200;
            $images.eq(i).css({
                left:0,
                top:y
            });
        }
    }
}
//랜덤정렬
var randomAlignable={
    align:function($images){
        //이미지 개수구하기
        var length=$images.length;
        //이미지 가로정렬
        for(var i=0;i<length;i++){
            var x=400*Math.random();
            var y=400*Math.random();
            $images.eq(i).css({
                left:x,
                top:y
            });
        }
    }
}
//바둑판정렬
var GridAlignable={
    align:function($images){
        //이미지 개수구하기
        var length=$images.length;
        var count=3;
        //이미지 가로정렬
        for(var i=0;i<length;i++){
            var x=(i%count)*200;
            var y=parseInt(i/count)*200;
            $images.eq(i).css({
                left:x,
                top:y
            });
        }
    }
}