//부모클래스
function Parent(){
    this.property='부모속성';
}
//부모메서드
Parent.prototype.method=function(){
    console.log('부모메서드 : '+this.property);
}
//자식클래스
function Child(){

}
//상속
Child.prototype=new Parent();
//명시적으로 child의 인스턴스를 담아준다.
Child.prototype.constructor=Child;
//부모와 자식의 인스턴스 생성
var par=new Parent();
var ch=new Child();

//부모의 인스턴스인지 확인
if(par.constructor==Parent){
    console.log('par는 Parent클래스의 인스턴스');
}
//자식의 인스턴스인지 확인
if(ch.constructor==Child){
    console.log('ch는 Child클래스의 인스턴스');
    //상속관계에서는 자식클래스 constructor에 부모의 인스턴스가 담기게됨
}
