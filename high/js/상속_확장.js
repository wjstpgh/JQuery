//부모클래스 정의(프로퍼티2,메서드6,총8개의 멤버를 가짐)
function CellPhone(){
    this.model=null;
    this.color=null;
}
//상속
DmbCellPhone.prototype=new CellPhone();
//메서드 정의
CellPhone.prototype.powerOn=function(){
    document.write('전원 켜짐</br>');
}
CellPhone.prototype.powerOff=function(){
    document.write('전원 꺼짐</br>');
}
CellPhone.prototype.bell=function(){
    document.write('벨이 울림</br>');
}
CellPhone.prototype.hangUp=function(){
    document.write('전화를 끊음</br>');
}
CellPhone.prototype.sendVoice=function(msg){
    document.write('내 메세지 : '+msg+'</br>');
}
CellPhone.prototype.receiveVoice=function(msg){
    document.write('상대 메세지 : '+msg+'</br>');
}
//자식클래스
function DmbCellPhone(){
    this.channel=null;
}
DmbCellPhone.prototype.turnOnDmb=function(channel){
    document.write('현재 채널 : '+channel+'을 수신</br>');
}
DmbCellPhone.prototype.turnOffDmb=function(){
    document.write('수신종료</br>');
}
DmbCellPhone.prototype.changeChannel=function(channel){
    this.channel=channel;
    document.write('채널 : '+channel+'로 변경</br>');
}
var dmb=new DmbCellPhone();
dmb.powerOn();
dmb.bell();
dmb.sendVoice('hi');
dmb.receiveVoice('wassup');
dmb.hangUp();
dmb.powerOff();
//자식고유메서드
dmb.turnOnDmb(10);
dmb.changeChannel(15);
dmb.turnOffDmb();