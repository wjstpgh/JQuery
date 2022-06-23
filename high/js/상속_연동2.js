//부모클래스
function Tv(power,channel){
    this.power=power;
    this.channel=channel;
}
//메서드 정의
Tv.prototype.power=function(){
    this.power=!power;
}
Tv.prototype.channelUp=function(){
    ++this.channel;
}
Tv.prototype.channelDouw=function(){
    --this.channel;
}
//자식클래스
function CaptionTv(caption){
    //부모의 매개변수 생성자 호출
    Tv.call(this,true,10);
    //자식 프로퍼티 초기화
    this.caption=caption;
}
CaptionTv.prototype=new Tv();
CaptionTv.prototype.displayCaption=function(text){
    if(this.caption){
        console.log(text);
    }
}
var caption=new CaptionTv(true);
caption.displayCaption('캡션이 true일때 text출력');
console.log('부모power : '+caption.power);
console.log('부모channel : '+caption.channel);