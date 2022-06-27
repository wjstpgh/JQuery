$(document).ready(function(){
    //모든 이미지 가져오기
    var img1=new SimpleGallery('#container1 img');
    //버튼에 클릭이벤트 등록
    $('#btnHorizontal').click(function(){
        img1.show('horizontal');
    });
    $('#btnVertical').click(function(){
        img1.show('vertical');
    });
    $('#btnRandom').click(function(){
        img1.show('random');
    });
    $('#btnGrid').click(function(){
        img1.show('grid');
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
//정렬
SimpleGallery.prototype.show=function(type){
    switch(type){
        case 'horizontal':
            this.alignHorizontal();
            break;
        case 'vertical':
            this.alignVertical();
            break;
        case 'random':
            this.alignRandom();
            break;
        case 'grid':
            this.alignGrid();
            break;
        default:
            this.alignHorizontal();
            break;
    }
}
//가로정렬
SimpleGallery.prototype.alignHorizontal=function(){
    //이미지 개수구하기
    var length=this.$images.length;
    //이미지 가로정렬
    for(var i=0;i<length;i++){
        var x=i*200;
        this.$images.eq(i).css({
            left:x,
            top:0
        });
    }
}
//세로정렬
SimpleGallery.prototype.alignVertical=function(){
    //이미지 개수구하기
    var length=this.$images.length;
    //이미지 가로정렬
    for(var i=0;i<length;i++){
        var y=i*200;
        this.$images.eq(i).css({
            left:0,
            top:y
        });
    }
}
//랜덤정렬
SimpleGallery.prototype.alignRandom=function(){
    //이미지 개수구하기
    var length=this.$images.length;
    //이미지 가로정렬
    for(var i=0;i<length;i++){
        var x=400*Math.random();
        var y=400*Math.random();
        this.$images.eq(i).css({
            left:x,
            top:y
        });
    }
}
//바둑판정렬
SimpleGallery.prototype.alignGrid=function(){
    //이미지 개수구하기
    var length=this.$images.length;
    var count=3;
    //이미지 가로정렬
    for(var i=0;i<length;i++){
        var x=(i%count)*200;
        var y=parseInt(i/count)*200;
        this.$images.eq(i).css({
            left:x,
            top:y
        });
    }
}