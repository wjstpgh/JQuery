$(function( ){
    var tv=new TV('lg','QHD','127','30');
    tv.showInfo();
    tv.channelChange(12314);
    tv.soundChange(3312);
    tv.showInfo();
});
//추상화
function TV(model,resolution,channel,volum){
    this.model=model;
    this.resolution=resolution;
    this.channel=channel;
    this.volum=volum;
}
//공통 부분을 메소드로 정의
TV.prototype.on=function(){//선언부
    document.write('전원이 커짐<br/>');  //구현부
}
TV.prototype.off=function(){
    document.write('전원이 꺼짐<br/>');
}
TV.prototype.channelChange=function(channel){
    this.channel=channel;
    document.write('현재 채널 : '+this.channel+'<br/>');
}
TV.prototype.soundChange=function(volum){
    this.volum=volum;
    document.write('현재 볼륨 : '+this.volum+'<br/>');
}
//프로퍼티 출력
TV.prototype.showInfo=function(){
    document.write('model : '+this.model+'<br/>');
    document.write('gender : '+this.resolution+'<br/>');
    document.write('channel : '+this.channel+'<br/>');
    document.write('volum : '+this.volum+'<br/>');
}